import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const getUserById = async (id) => {
  if (!id) throw new Error("ID do usuário é obrigatório");
  return await userRepository.getUserById(id);
};

const createUser = async (user) => {
  const { firstname, lastname, preferredName, email, username, password } = user;

  if (!firstname || !lastname || !email || !username || !password) {
    throw new Error("Todos os campos são obrigatórios!");
  }

  const existingUser = await userRepository.getUserByEmailOrUsername(email, username);
  if (existingUser) {
    throw new Error("Email ou Username já estão em uso!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await userRepository.createUser({
    firstname,
    lastname,
    preferredName,
    email,
    username,
    password: hashedPassword,
  });
};

const deleteUser = async (id) => {
  if (!id) throw new Error("ID do usuário é obrigatório");
  return await userRepository.deleteUser(id);
};

export default { getAllUsers, getUserById, createUser, deleteUser };
