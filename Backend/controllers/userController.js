const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    // You should add validation and password hashing here.

    const newUser = new User({
      username,
      password, 
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login a user and return a JWT token
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (true) {
      const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
