import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "spygraphix-agency-secret-key-2026";

const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "spygraphix-agency-refresh-secret-2026";

export const generateTokens = (user) => {
  const payload = {
    _id: user._id?.toString() || user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatar: user.avatar,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};
