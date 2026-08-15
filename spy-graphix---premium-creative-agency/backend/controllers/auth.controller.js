import crypto from "crypto";

import { User } from "../models/User.js";
import { generateTokens, verifyRefreshToken } from "../utils/jwt.js";

import { sendMail } from "../utils/sendMail.js";

// ==========================================
// COOKIE OPTIONS
// ==========================================

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
};

// ==========================================
// SEND AUTH RESPONSE
// ==========================================

const sendAuthResponse = (res, user) => {
  const { accessToken, refreshToken } = generateTokens({
    _id: user._id.toString(),
    email: user.email,
    name: user.name,
    role: user.role,
    avatar: user.avatar,
  });

  // Access token
  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: 15 * 60 * 1000,
  });

  // Refresh token
  res.cookie("refreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.json({
    success: true,

    // Keep these if your current frontend uses them.
    accessToken,
    refreshToken,

    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
  });
};

// ==========================================
// LOGIN
// ==========================================

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Please provide email and password",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({
      email: normalizedEmail,
    }).select("+password");

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    const passwordCorrect = await user.matchPassword(password);

    if (!passwordCorrect) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    return sendAuthResponse(res, user);
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      error: "Login failed",
    });
  }
};

// ==========================================
// REGISTER
// ==========================================

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        error: "An account with this email already exists",
      });
    }

    const user = await User.create({
      name,
      email: normalizedEmail,
      password,

      // Never allow public registration
      // to create an admin account.
      role: role === "admin" ? "Client" : role || "Client",
    });

    return sendAuthResponse(res, user);
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      error: error.message || "Registration failed",
    });
  }
};

// ==========================================
// LOGOUT
// ==========================================

export const logout = (req, res) => {
  res.clearCookie("accessToken", cookieOptions);

  res.clearCookie("refreshToken", cookieOptions);

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};

// ==========================================
// CURRENT USER
// ==========================================

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken -resetPasswordToken -resetPasswordExpire",
    );

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get me error:", error);

    return res.status(500).json({
      error: "Failed to fetch user",
    });
  }
};

// ==========================================
// FORGOT PASSWORD
// ==========================================

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({
      email: normalizedEmail,
    }).select("+resetPasswordToken +resetPasswordExpire");

    // Do not reveal whether
    // the account exists.
    if (!user) {
      return res.json({
        success: true,
        message:
          "If an account exists with this email, password reset instructions have been sent.",
      });
    }

    // ======================================
    // CREATE RESET TOKEN
    // ======================================

    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash token before storing
    // it in MongoDB.
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;

    // 15 minute expiry
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    await user.save({
      validateBeforeSave: false,
    });

    // ======================================
    // RESET URL
    // ======================================

    const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000";

    const resetUrl = `${frontendURL}/reset-password/${resetToken}`;

    console.log("🔐 Password reset URL:", resetUrl);

    // ======================================
    // SEND EMAIL
    // ======================================

    await sendMail({
      to: user.email,

      subject: "SPY GRAPHIX - Reset Your Password",

      text: `
Hello ${user.name},

We received a request to reset your SPY GRAPHIX account password.

Reset your password using this link:

${resetUrl}

This link will expire in 15 minutes.

If you did not request this password reset, you can safely ignore this email.

SPY GRAPHIX
`,

      html: `
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <title>SPY GRAPHIX Password Reset</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
  "
>

  <div
    style="
      max-width:600px;
      margin:40px auto;
      background:#ffffff;
      padding:40px;
      border-radius:16px;
      border:1px solid #eeeeee;
    "
  >

    <h1
      style="
        margin:0 0 20px;
        color:#111111;
      "
    >
      SPY GRAPHIX
    </h1>

    <h2
      style="
        color:#111111;
      "
    >
      Reset Your Password
    </h2>

    <p>
      Hello ${user.name},
    </p>

    <p>
      We received a request to reset your
      SPY GRAPHIX account password.
    </p>

    <p>
      Click the button below to create
      a new password.
    </p>

    <div
      style="
        margin:30px 0;
      "
    >

      <a
        href="${resetUrl}"
        style="
          display:inline-block;
          padding:14px 24px;
          background:#111111;
          color:#ffffff;
          text-decoration:none;
          border-radius:8px;
          font-weight:bold;
        "
      >
        Reset Password
      </a>

    </div>

    <p>
      This link will expire in
      <strong>15 minutes</strong>.
    </p>

    <p
      style="
        color:#777777;
      "
    >
      If you did not request a password
      reset, you can safely ignore this email.
    </p>

    <hr
      style="
        border:none;
        border-top:1px solid #eeeeee;
        margin:30px 0;
      "
    >

    <p
      style="
        font-size:12px;
        color:#999999;
      "
    >
      SPY GRAPHIX
    </p>

  </div>

</body>
</html>
`,
    });

    return res.json({
      success: true,
      message:
        "If an account exists with this email, password reset instructions have been sent.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return res.status(500).json({
      error: "Failed to process password reset request",
    });
  }
};

// ==========================================
// RESET PASSWORD
// ==========================================

export const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({
        error: "Token and new password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters",
      });
    }

    // ======================================
    // HASH TOKEN FROM URL
    // ======================================

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // ======================================
    // FIND VALID TOKEN
    // ======================================

    const user = await User.findOne({
      resetPasswordToken: hashedToken,

      resetPasswordExpire: {
        $gt: Date.now(),
      },
    }).select("+password +resetPasswordToken +resetPasswordExpire");

    // ======================================
    // INVALID TOKEN
    // ======================================

    if (!user) {
      return res.status(400).json({
        error: "Password reset link is invalid or has expired",
      });
    }

    // ======================================
    // CHANGE PASSWORD
    // ======================================

    user.password = password;

    // Delete token so it
    // cannot be reused.
    user.resetPasswordToken = undefined;

    user.resetPasswordExpire = undefined;

    // Your User.js pre-save
    // automatically hashes password.
    await user.save();

    return res.json({
      success: true,
      message: "Password reset successfully. You can now login.",
    });
  } catch (error) {
    console.error("Reset password error:", error);

    return res.status(500).json({
      error: "Failed to reset password",
    });
  }
};

// ==========================================
// REFRESH ACCESS TOKEN
// ==========================================

export const refreshTokenHandler = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        error: "Refresh token required",
      });
    }

    const decoded = verifyRefreshToken(refreshToken);

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    return sendAuthResponse(res, user);
  } catch (error) {
    console.error("Refresh token error:", error);

    return res.status(401).json({
      error: "Invalid or expired refresh token",
    });
  }
};
