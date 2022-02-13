import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
// get all users
const getAllUsers = async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

const getUserById = async (id) => {
  const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return request.then((reponse) => reponse.data);
};

export default { getAllUsers, getUserById };
