const postService = require('../service/post.service');

const getAllpost = async (_req, res) => {
  try {
    const users = await postService.getAllpost();
    return res.status(200).json(users);
  } catch (e) {
        res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllpost,
};