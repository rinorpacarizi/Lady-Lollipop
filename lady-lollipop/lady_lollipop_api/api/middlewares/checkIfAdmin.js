import admin from "../services/firebase";

const checkIfAdmin = async (req, res, next) => {
  const { authToken } = req;
try{
    const info = await admin.auth().verifyIdToken(authToken);
}catch(err){
    return res.status(401).json({ message: "Cannot verify right now" });
}
 
  if (user.admin) {
    res.authId = user.uid;
  } else {
    return res.status(401).json({ message: "Not an admin" });
  }

 return next();
};
export default checkIfAdmin;