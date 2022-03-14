import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createSweets = async (sweetsBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("sweets/create", sweetsBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createSweets;
