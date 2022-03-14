import apiCaller from "../apiCaller";
import { getAuth } from "firebase/auth";

const getSweetsList = async () => {
  const token = await getAuth().currentUser.getIdToken();
  const result = await apiCaller.get("sweets/list", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export default getSweetsList;
