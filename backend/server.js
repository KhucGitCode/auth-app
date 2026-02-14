const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

const SECRET_KEY = "mysecretkey";

app.get("/", (req, res) => {
  res.send("Auth Server Running");
});

let users = [];

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = user;
    next();
  });
}

// Signup Route-------------------
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({ message: "Signup successful" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Login Route---------------

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Check if user exists
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token: token
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user
  });
});
