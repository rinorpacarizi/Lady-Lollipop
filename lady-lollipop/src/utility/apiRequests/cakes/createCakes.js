import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createCakes = async (cakesBody) => {
  const token = await getAuth().currentUser.getIdToken();
  const { data } = await apiCaller.post("cakes/create", cakesBody, {
    authorization: `Bearer ${token}`,
  });

  return data;
};

export default createCakes;
