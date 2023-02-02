require('dotenv').config();
const jwt = require('jsonwebtoken');

// ajuda de dani gazarini 

const jwtSecret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
};

const generateToken = ({ email, id }) =>
 jwt.sign({ email, id }, jwtSecret, jwtConfig);

module.exports = {
    generateToken,
 };
