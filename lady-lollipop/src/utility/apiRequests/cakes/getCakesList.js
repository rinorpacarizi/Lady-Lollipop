import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getCakesList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("cakes/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getCakesList;
