const setRole = async (customClaim) => {
  await admin.auth().setCustomUserClaims(user.uid, customClaim);
  return await db.collection("roles").doc(user.uid).set({
    email: user.email,
    role: customClaim,
  });
};
export default setRole;
