import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeFile = async (id, file) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.put(`sweets/${id}/removeFile/${file.name}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default removeFile;
