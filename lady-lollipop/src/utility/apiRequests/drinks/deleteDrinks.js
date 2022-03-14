import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteDrinks = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`drinks/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteDrinks;
