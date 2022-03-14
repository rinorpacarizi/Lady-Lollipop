import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteCakes = async (id) => {
  const token = await getAuth().currentUser.getIdToken();

  return apiCaller.delete(`cakes/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export default deleteCakes;
