const loginService = require('../service/login.service');

const auth = async (req, res) => {
  const { email, password } = req.body;
 if (!email || !password) {
   return res.status(400).json({ message: 'Some required fields are missing' });
 }
  const { token, type, message } = await loginService.authenticate(req.body);
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(200).json({ token });
};

const login = async (req, res) => {
    try {
    const users = await loginService.login(req.body);
    return res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ login });
  }
};

module.exports = { login, auth };