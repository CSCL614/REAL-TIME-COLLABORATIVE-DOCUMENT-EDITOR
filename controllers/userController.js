const { getUsers, findUserByUsername, createUser } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "your_jwt_secret";

const getUsersList = (req, res) => {
  getUsers((err, result) => {
    if (err) res.status(500).send(err);
    else res.json(result);
  });
};

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await findUserByUsername(username);
    if (existing) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, hashedPassword);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsername(username);
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsersList, register, login };
