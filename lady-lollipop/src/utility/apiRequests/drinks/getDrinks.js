import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getDrinks = async (drinksId) => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get(`drinks/${drinksId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getDrinks;
