import pool from "../config/database.js";

const getAllUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};

const createUser = async (user) => {
  const { firstname, lastname, preferredName, email, username, password } = user;
  const [result] = await pool.query(
    "INSERT INTO users (firstname, lastname, preferred_name, email, username, password) VALUES (?, ?, ?, ?, ?, ?)",
    [firstname, lastname, preferredName, email, username, password]
  );
  return { id: result.insertId };
};

export default { getAllUsers, createUser };
