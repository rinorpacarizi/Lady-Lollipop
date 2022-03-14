import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editCakes = async (cakesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.put("cakes/update", cakesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default editCakes;
