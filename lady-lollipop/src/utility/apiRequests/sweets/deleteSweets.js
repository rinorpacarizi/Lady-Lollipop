import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteSweets = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`sweets/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteSweets;
