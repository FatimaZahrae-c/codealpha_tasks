const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// 🚨 Vulnerable: hardcoded credentials
const users = [{ username: "admin", password: "123456" }];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 🚨 Vulnerable: no input validation or escaping
  const user = users.find(
    (u) => u.username == username && u.password == password
  );

  if (user) {
    res.send(`<h2>Welcome ${username}!</h2>`);
  } else {
    res.send("<h2>Invalid login!</h2>");
  }
});

app.post("/run", (req, res) => {
  const code = req.body.code;

  // 🚨 Dangerous use of eval()
  try {
    const result = eval(code);
    res.send(`<pre>${result}</pre>`);
  } catch (e) {
    res.send(`<pre>Error: ${e.message}</pre>`);
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
