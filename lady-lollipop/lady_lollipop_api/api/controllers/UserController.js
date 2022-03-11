import admin from "../services/firebase";
import registerSchema from "../../validatiors/registerValidatiors";
import setRole from "../helpers/setRole";

const db = admin.firestore();

const adminEmails = ["admin@gmail.com"];

const userController = {
  list: (req, res) => {
    return res.json({ data: [] });
  },
  register: async (req, res) => {
     const validationResult = registerSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(403).json({
        message: validationResult.error,
      });
    }

    const { firstName, lastName, username, email, password } = req.body;

    try {
      const user = await admin.auth().createUser({
        firstName,
        lastName,
        username,
        email,
        password,
      });

      if (adminEmails.includes(user.email)) {
        const customClaims = { admin: true };
        await setRole(customClaims);
      }

      res.json(user);
    } catch (err) {
      return res.status(500).json({
        message: err,
      });
    }
  },
};
export default userController;
