import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editDrinks = async (drinksBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("drinks/update", drinksBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editDrinks;
