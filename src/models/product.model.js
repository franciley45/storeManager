const connection = require('./DB/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products', [],
  );
 /*  console.log(result); */
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  /* console.log(result); */
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
};