const connection = require('./DB/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products', [],
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );

  return result;
};

const newProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );
  return { id: insertId, name };
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
};