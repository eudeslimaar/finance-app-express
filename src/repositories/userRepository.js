import pool from "../config/database.js";
import User from "../models/userModel.js";

const getAllUsers = async () => {
	const [rows] = await pool.query("SELECT * FROM users");
	return rows.map(user => new User(...Object.values(user)));
};

const getUserById = async (id) => {
	const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
	return rows.length > 0 ? new User(...Object.values(rows[0])) : null;
};

const getUserByEmailOrUsername = async (email, username) => {
	const [rows] = await pool.query(
		"SELECT * FROM users WHERE email = ? OR username = ?",
		[email, username]
	);
	return rows.length > 0 ? new User(...Object.values(rows[0])) : null;
};

const createUser = async (user) => {
	const { firstname, lastname, preferredName, email, username, password } = user;

	const [result] = await pool.query(
		"INSERT INTO users (firstname, lastname, preferred_name, email, username, password) VALUES (?, ?, ?, ?, ?, ?)",
		[firstname, lastname, preferredName, email, username, password]
	);

	return await getUserById(result.insertId);
};

export default { getAllUsers, getUserById, getUserByEmailOrUsername, createUser };
