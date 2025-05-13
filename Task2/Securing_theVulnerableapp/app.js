const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 3000;

// 🛡️ Simulated user with hashed password
const users = [
  {
    username: "admin",
    // Hash for "123456" with bcrypt (10 salt rounds)
    passwordHash:
      "$2b$10$rVkTktcwCA9Rh42gKWSVSeaBP27j9uTrkTarnCvlz9fl9UpfSCH6m",
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

// ✅ Input validation and secure password check
app.post(
  "/login",
  [
    body("username").trim().notEmpty().withMessage("Username required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send("Validation Error: " + JSON.stringify(errors.array()));
    }

    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      res.send(`<h2>Welcome, ${username}!</h2>`);
    } else {
      res.send("<h2>Invalid credentials</h2>");
    }
  }
);

// 🚫 Removed /run route using eval()

app.listen(port, () => {
  console.log(`Secure app running at http://localhost:${port}`);
});
