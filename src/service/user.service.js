const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

// ajuda do meu amigo rafael pacheco e gustavo tardin

const createUser = async (email, password, displayName, image) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser) {
    return { type: 'register ', message: 'User already registered' };
  }

  await User.create({ email, password, displayName, image });

  const token = generateToken({ email });
  
  return { type: null, message: token };
};

   module.exports = {
     
    createUser };
