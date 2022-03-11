import axiosInstance from './axiosInstance'

const registerUser = (firstName, lastName, username, email, password) => {
  return axiosInstance.post("users/register", {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};
export default registerUser;
