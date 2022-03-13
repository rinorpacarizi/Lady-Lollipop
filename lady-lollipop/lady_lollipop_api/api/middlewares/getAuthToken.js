const getAuthToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader && authorizationHeader.split(" ")[0] === "Bearer") {
    req.authToken = authorizationHeader.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

export default getAuthToken;
