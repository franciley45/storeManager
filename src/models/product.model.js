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

const updateProduct = async (id, name) => {
   await connection.execute(
    'UPDATE products set name = ? WHERE id = ?',
    [name, id],
  );
};

const checkIdProduct = async (id) => {
  const [result] = await connection.execute(
    'SELECT products.id FROM StoreManager.products WHERE (id = (?))', [id],
  );
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  newProduct,
  updateProduct,
  checkIdProduct,
};