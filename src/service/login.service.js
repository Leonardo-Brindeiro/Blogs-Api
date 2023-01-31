const { User } = require('../models');
const { generateToken, authenticateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
const login = await User.findOne({
  attributes: ['id', 'email'],
  where: { email, password },
});

if (!login) {
 return { type: 'corinthians', message: 'Invalid fields' };
}

const token = generateToken(login);

const athentic = await authenticateToken(token);

// console.log(athentic);
return { token };
};

  module.exports = {
     
     authenticate };
