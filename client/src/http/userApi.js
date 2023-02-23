import { $host } from './index';

export const getUsers = async () => {
  const users = await $host.get('user');
  const json = await users.data;
  return json;
};
export const createUser = async (email) => {
  const user = await $host.post('user/create', { email });
  return user;
};
export const deleteUser = async (id) => {
  await $host.delete(`user/${id}`);
};
export const updateUser = async (id, monies) => {
  await $host.put(`user/${id}`, { monies });
};
