import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getSweets = async (sweetsId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`sweets/${sweetsId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getSweets;
