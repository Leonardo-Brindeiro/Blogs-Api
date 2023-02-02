const userService = require('../service/user.service');

// ajuda do meu amigo rafael pacheco e gustavo t

const createUser = async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const { type, message } = await userService.createUser(email, password, displayName, image);

    if (type) {
        return res.status(409).send({ message: 'User already registered' });
      }
      
    return res.status(201).json({ token: message });
     };

module.exports = { createUser };