import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editSweets = async (sweetsBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("sweets/update", sweetsBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editSweets;
