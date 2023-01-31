const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
};

const generateToken = ({ email, id }) =>
 jwt.sign({ email, id }, JWT_SECRET, jwtConfig);

 const authenticateToken = async (token) => {
    if (!token) {
        const error = new Error('missin auth token');
        error.status = 400;
        throw error;
    }
};

module.exports = {
    generateToken,
    authenticateToken,
};
