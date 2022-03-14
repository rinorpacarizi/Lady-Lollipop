import apiRequest from "../apiRequests/apiCaller";

const registerUser = (firstName, lastName, username, email, password) => {
  return apiRequest.post("users/register", {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};
export default registerUser;
