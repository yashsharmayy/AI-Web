import { verifyAccessToken } from "../utils/jwt.js";
import { User } from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  // Get token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Otherwise get token from cookie
  else if (req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  // No token
  if (!token) {
    return res.status(401).json({
      error: "Unauthorized access. No token provided.",
    });
  }

  try {
    // Verify JWT
    const decoded = verifyAccessToken(token);

    // Find the actual user in MongoDB
    const user = await User.findById(decoded._id).select(
      "-password -refreshToken -resetPasswordToken",
    );

    if (!user) {
      return res.status(401).json({
        error: "User no longer exists.",
      });
    }

    // Attach MongoDB user to request
    req.user = user;

    next();
  } catch (err) {
    console.error("Auth middleware error:", err.message);

    return res.status(401).json({
      error: "Token verification failed or token expired.",
    });
  }
};
