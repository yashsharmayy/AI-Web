import { useState } from "react";
import { X, Shield, Lock, Mail, User as UserIcon, KeyRound, LogOut, Trash2, CheckCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
export const AuthModal = () => {
  const {
    user,
    authModalOpen,
    authModalView,
    closeAuthModal,
    openAuthModal,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    deleteAccount,
    forgotPassword
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [profileName, setProfileName] = useState(user?.name || "");
  const [profileAvatar, setProfileAvatar] = useState(user?.avatar || "");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  if (!authModalOpen) return null;
  const resetFeedback = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);
    try {
      await login({ email, password });
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);
    try {
      await register({ name, email, password, role: "Client" });
      setSuccessMsg("Account registered and logged in successfully!");
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);
    try {
      const res = await forgotPassword(email);
      setSuccessMsg(res.message || "Password reset link sent to your email.");
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Failed to request reset.");
    } finally {
      setLoading(false);
    }
  };
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);
    try {
      await updateProfile({ name: profileName, avatar: profileAvatar });
      setSuccessMsg("Profile updated successfully!");
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    resetFeedback();
    setLoading(true);
    try {
      await changePassword({ currentPassword: currentPass, newPassword: newPass });
      setSuccessMsg("Password changed successfully.");
      setCurrentPass("");
      setNewPass("");
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-100000 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">

      <div
        className="
        bg-[#FFFFFF]
        rounded-3xl
        border border-black/10
        shadow-2xl
        max-w-lg
        w-full
        max-h-[90vh]
        overflow-y-auto
        p-5 sm:p-8
        relative
        space-y-6
      "
      >
        {
          /* Close Button */
        }
        <button
          onClick={closeAuthModal}
          className="
    sticky
    top-3
    ml-auto
    z-50
    block
    p-2
    rounded-full
    bg-[#F6F6F6]
    text-[#777777]
    hover:text-[#111111]
    hover:bg-black/5
    transition-colors
  "
        >
          <X className="w-5 h-5" />
        </button>

        {
          /* Modal Header */
        }
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#111111] text-[#6d001a] flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold font-syne text-[#111111]">
            {user ? "SPY GRAPHIX Account Portal" : authModalView === "login" ? "Welcome Back" : authModalView === "register" ? "Create Client Account" : "Reset Password"}
          </h2>
          <p className="text-xs text-[#777777]">
            {user ? `Logged in as ${user.email} (${user.role})` : "Secure JWT Client Portal"}
          </p>
        </div>

        {
          /* Messages */
        }
        {errorMsg && <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3.5 rounded-xl text-center font-medium">
          {errorMsg}
        </div>}
        {successMsg && <div className="bg-green-50 border border-green-200 text-green-700 text-xs p-3.5 rounded-xl text-center font-medium flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4" /> {successMsg}
        </div>}

        {
          /* LOGGED IN PROFILE VIEW */
        }
        {user ? <div className="space-y-6">
          <div className="p-4 bg-[#F6F6F6] rounded-2xl flex items-center gap-4">
            <img
              src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}
              alt={user.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-black/10"
            />
            <div className="grow">
              <h3 className="font-bold text-sm text-[#111111]">{user.name}</h3>
              <p className="text-xs text-[#777777]">{user.email}</p>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#6d001a]/10 text-[#6d001a]">
                {user.role}
              </span>
            </div>
          </div>

          {
            /* Profile Update Form */
          }
          <form onSubmit={handleProfileUpdate} className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#777777]">Edit Profile Details</h4>
            <input
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="Full Name"
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3 text-xs focus:outline-none"
            />
            <input
              type="text"
              value={profileAvatar}
              onChange={(e) => setProfileAvatar(e.target.value)}
              placeholder="Avatar Image URL"
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3 text-xs focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111111] hover:bg-[#6d001a] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Save Profile
            </button>
          </form>

          {
            /* Change Password */
          }
          {/* SECURITY & PASSWORD */}
          <div className="border-t border-black/8 pt-4">

            {/* Header */}
            <div className="flex items-center justify-between gap-3">

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#777777]">
                  Security & Password
                </h4>

                {!showPasswordSection && (
                  <p className="text-[11px] text-[#999999] mt-1">
                    Manage your account password
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowPasswordSection((prev) => !prev);
                  resetFeedback();
                }}
                className="
        px-4
        py-2
        rounded-xl
        bg-[#111111]
        text-white
        text-[10px]
        font-bold
        uppercase
        tracking-wider
        hover:bg-[#6d001a]
        transition-all
        whitespace-nowrap
      "
              >
                {showPasswordSection ? "Cancel" : "Change Password"}
              </button>

            </div>

            {/* Password Form */}
            {showPasswordSection && (
              <form
                onSubmit={handleChangePassword}
                className="space-y-3 mt-4"
              >

                <input
                  type="password"
                  required
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  placeholder="Current Password"
                  className="
          w-full
          bg-[#F6F6F6]
          border
          border-black/8
          rounded-xl
          p-3
          text-xs
          focus:outline-none
          focus:border-black/20
        "
                />

                <input
                  type="password"
                  required
                  minLength={6}
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  placeholder="New Password (min 6 chars)"
                  className="
          w-full
          bg-[#F6F6F6]
          border
          border-black/8
          rounded-xl
          p-3
          text-xs
          focus:outline-none
          focus:border-black/20
        "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
          w-full
          bg-[#111111]
          hover:bg-[#6d001a]
          text-white
          py-3
          rounded-xl
          text-xs
          font-bold
          uppercase
          tracking-wider
          transition-all
        "
                >
                  {loading ? "Updating..." : "Update Password"}
                </button>

              </form>
            )}

          </div>
          {
            /* Footer Actions */
          }
          <div className="flex items-center justify-between border-t border-black/8 pt-4">
            <button
              onClick={deleteAccount}
              className="text-red-600 hover:text-red-800 text-xs font-bold flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete Account
            </button>
            <button
              onClick={logout}
              className="bg-[#6d001a] hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div> : authModalView === "login" ? (
          /* LOGIN VIEW */
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-[#777777]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-[#6d001a] focus:ring-[#6d001a]"
                />
                Remember Me
              </label>
              <button
                type="button"
                onClick={() => {
                  resetFeedback();
                  openAuthModal("forgot");
                }}
                className="text-[#6d001a] font-bold hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111111] hover:bg-[#6d001a] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="text-center pt-2 text-xs text-[#777777]">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  resetFeedback();
                  openAuthModal("register");
                }}
                className="text-[#111111] font-bold hover:underline"
              >
                Create One
              </button>
            </div>
          </form>
        ) : authModalView === "register" ? (
          /* REGISTER VIEW */
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Full Name</label>
              <div className="relative">
                <UserIcon className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6d001a] hover:bg-red-700 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <UserIcon className="w-4 h-4" /> {loading ? "Registering..." : "Create Account"}
            </button>

            <div className="text-center pt-2 text-xs text-[#777777]">
              Already registered?{" "}
              <button
                type="button"
                onClick={() => {
                  resetFeedback();
                  openAuthModal("login");
                }}
                className="text-[#111111] font-bold hover:underline"
              >
                Sign In
              </button>
            </div>
          </form>
        ) : (
          /* FORGOT PASSWORD VIEW */
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Account Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#999999]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 pl-10 text-xs text-[#111111] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111111] hover:bg-[#6d001a] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" /> Send Reset Link
            </button>

            <div className="text-center pt-2 text-xs text-[#777777]">
              Back to{" "}
              <button
                type="button"
                onClick={() => {
                  resetFeedback();
                  openAuthModal("login");
                }}
                className="text-[#111111] font-bold hover:underline"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

      </div>
    </div>)
};
