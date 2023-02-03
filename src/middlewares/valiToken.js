const { authenticToken } = require('../utils/JWT');
const { mapError } = require('../utils/errorMap');

const authToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { type, message } = await authenticToken(authorization);
  if (type) return res.status(mapError(type)).json({ message });

  return next();
};

const validName = async (req, res, next) => {
  const { name } = await req.body;
  if (!name) {
 return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = { 
  authToken,
  validName,

};