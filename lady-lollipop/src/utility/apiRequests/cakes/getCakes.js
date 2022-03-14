import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getCakes = async (cakesId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`cakes/${cakesId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getCakes;
