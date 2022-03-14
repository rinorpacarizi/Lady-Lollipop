import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getDrinksList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("drinks/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getDrinksList;
