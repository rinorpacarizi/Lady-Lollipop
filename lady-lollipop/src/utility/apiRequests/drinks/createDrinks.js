import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createDrinks = async (drinksBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("drinks/create", drinksBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createDrinks;
