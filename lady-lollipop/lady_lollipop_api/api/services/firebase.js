import admin from "firebase-admin";

import serviceAccount from "../../credentials/lady-lollipop-firebase-adminsdk-h755z-f2d9509e69.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;