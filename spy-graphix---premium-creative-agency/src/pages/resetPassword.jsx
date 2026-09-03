import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Lock, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { authService } from "../services/auth.service";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess(false);

        if (!token) {
            setError("Invalid password reset link.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            await authService.resetPassword({
                token,
                password,
            });

            setSuccess(true);
            setPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (err) {
            setError(
                err.response?.data?.error ||
                err.message ||
                "Password reset failed. The link may have expired."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-black/10 p-6 sm:p-8">

                {/* Logo / Icon */}
                <div className="text-center mb-7">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#111111] text-[#6d001a] flex items-center justify-center">
                        <Shield className="w-7 h-7" />
                    </div>

                    <h1 className="mt-4 text-2xl font-bold text-[#111111]">
                        Reset Password
                    </h1>

                    <p className="mt-2 text-sm text-[#777777]">
                        Create a new password for your SPY GRAPHIX account.
                    </p>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-5 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Success */}
                {success && (
                    <div className="mb-5 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-sm">
                        <div className="flex items-center gap-2 font-semibold">
                            <CheckCircle className="w-5 h-5" />
                            Password reset successfully!
                        </div>

                        <p className="mt-2">
                            Redirecting you to the website...
                        </p>
                    </div>
                )}

                {!success && (
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* New Password */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wide text-[#777777] mb-2">
                                New Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#999999]" />

                                <input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    className="w-full bg-[#F6F6F6] border border-black/10 rounded-xl p-3.5 pl-10 text-sm text-[#111111] focus:outline-none focus:border-black/30"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wide text-[#777777] mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#999999]" />

                                <input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    className="w-full bg-[#F6F6F6] border border-black/10 rounded-xl p-3.5 pl-10 text-sm text-[#111111] focus:outline-none focus:border-black/30"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#111111] hover:bg-[#6d001a] disabled:opacity-50 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                        >
                            {loading ? "Resetting Password..." : "Reset Password"}
                        </button>

                    </form>
                )}

                <div className="text-center mt-6">
                    <Link
                        to="/"
                        className="text-xs font-bold text-[#777777] hover:text-[#111111]"
                    >
                        ← Back to SPY GRAPHIX
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ResetPassword;