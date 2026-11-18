
function branchAccess(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      error: "Authentication required"
    });
  }

  if (req.user.role === "admin") {
    return next();
  }

  if (!req.user.branchId) {
    return res.status(403).json({
      error: "Branch access denied"
    });
  }

  const requestedBranch =
    req.params.branchId ||
    (req.body && req.body.branchId) ||
    req.query.branchId;

  if (
    requestedBranch &&
    requestedBranch !== req.user.branchId
  ) {
    return res.status(403).json({
      error: "Access to this branch is forbidden"
    });
  }

  next();
}

function canAccessOrder(user, order) {
  if (!user || !order) {
    return false;
  }

  if (user.role === "admin") {
    return true;
  }

  return user.branchId === order.branchId;
}

module.exports = branchAccess;
module.exports.canAccessOrder = canAccessOrder;
