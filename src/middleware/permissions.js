
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: "Authentication required"
      });
    }

    const permissions = req.user.permissions || [];

    if (req.user.role === "admin") {
      return next();
    }

    if (!permissions.includes(permission)) {
      return res.status(403).json({
        error: "Permission denied"
      });
    }

    next();
  };
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: "Authentication required"
      });
    }

    if (req.user.role !== role) {
      return res.status(403).json({
        error: "Access denied"
      });
    }

    next();
  };
}

module.exports = {
  requirePermission,
  requireRole
};
