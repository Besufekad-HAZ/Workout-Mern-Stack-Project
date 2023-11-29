const requireAuth = (req, res, next) => {
  //verify user is authenticated
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
};
