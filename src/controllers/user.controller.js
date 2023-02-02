const userService = require('../service/user.service');
const { User } = require('../models');

// ajuda do meu amigo rafael pacheco e gustavo t

const createUser = async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const { type, message } = await userService.createUser(email, password, displayName, image);

    if (type) {
        return res.status(409).send({ message: 'User already registered' });
      }
      
    return res.status(201).json({ token: message });
     };

     const allGetUsers = async (_req, res) => {
      const users = await userService.allGetUsers();
  return res.status(200).json(users);
};
const allGetUsersById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.allGetUsersById(id);
    const userExist = await User.findOne({
      where: { id },
    });

    if (!userExist) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
};

module.exports = { createUser, allGetUsers, allGetUsersById };