export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (
      !req.user ||
      (!roles.includes(req.user.role) && req.user.role !== "admin")
      // req.user.role !== "Admin"
    ) {
      return res.status(403).json({
        error: "Forbidden: Insufficient permissions for this operation.",
      });
    }
    next();
  };
};

export const adminOnly = restrictTo("admin", "Team Member");
