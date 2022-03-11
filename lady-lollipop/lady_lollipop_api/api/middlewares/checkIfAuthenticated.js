import admin from "../services/firebase";

const checkIfAuthenticated =async (req, res, next) => {
  const { authToken } = req;
  try {
    const user = await admin.auth().verifyIdToken(authToken);
    req.authId = user.uid;
  } catch (err) {
    return res.status(401).json({ message: "You aint authenticated" });
  }

  return next();
};

export default checkIfAuthenticated;
