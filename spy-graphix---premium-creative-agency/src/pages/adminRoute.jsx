import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
    const token = localStorage.getItem("spygraphix_token");

    console.log("========== ADMIN ROUTE ==========");
    console.log("TOKEN:", token);

    if (!token) {
        console.log("❌ No token");
        return <Navigate to="/login" replace />;
    }

    try {
        // Decode JWT payload
        const payload = JSON.parse(
            atob(token.split(".")[1])
        );

        console.log("JWT PAYLOAD:", payload);
        console.log("ROLE:", payload.role);

        if (payload.role?.toLowerCase() !== "admin") {
            console.log("❌ NOT ADMIN");
            return <Navigate to="/" replace />;
        }

        console.log("✅ ADMIN ACCESS GRANTED");

        return children;

    } catch (error) {
        console.error("❌ Invalid JWT:", error);

        localStorage.removeItem("spygraphix_token");
        localStorage.removeItem("spygraphix_user");

        return <Navigate to="/login" replace />;
    }
}