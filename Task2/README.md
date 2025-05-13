####Secure Coding Review – Vulnerable & Secure Node.js App

This repository contains two versions of a simple Node.js Express application:

- ⚠️ A **Vulnerable App** (for learning how to identify security issues)
- ✅ A **Secure App** (refactored version with best practices applied)

---

### 🔍 Key Vulnerabilities
| 🔐 Issue                     | Why it's Dangerous                      |
|-----------------------------|-----------------------------------------|
| `eval()` usage              | Can lead to remote code execution       |
| Hardcoded credentials       | Leaks sensitive information             |
| No password hashing         | Passwords can be stolen in plaintext    |
| No input validation         | Exposes app to injection attacks        |
    



### 🔐 Security Improvements
| 🛡️ Fix                                                           | 
|------------------------------------------------------------------|                                      
| ❌ Removed eval()	No dynamic code execution                      | 
| 🔒 Password hashing	Uses bcrypt for secure storage             | 
| 📁Input validation	Validates form data with express-validator | 



### 🧪 Run
npm install
npm start



### 📚 Learning Objective
This project was created as part of a Secure Coding Review task for a cybersecurity internship. It aims to help identify and fix typical vulnerabilities in web applications.



