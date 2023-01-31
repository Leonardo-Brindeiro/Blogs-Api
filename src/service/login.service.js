const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
const login = await User.findOne({
  attributes: ['id', 'email'],
  where: { email, password },
});

if (!login) {
 return { type: 'corinthians', message: 'Invalid fields' };
}

const token = generateToken(login);

return { token };
};

  module.exports = {
     
     authenticate };
