const camelize = require('camelize');
const connection = require('./DB/connection');

const insert = async (sale) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUES()',
  );

  const values = sale.map(
    ({ productId, quantity }) => `(${insertId}, ${productId}, ${quantity})`,
  );

  const valuesString = values.join(', ');

  connection.execute(
    `INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES ${valuesString}`,
  );
  return insertId;
};

const checkIds = async (ids) => {
  const [results] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE id IN (${ids.join(', ')})`,
  );
  
  return results;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT products.sale_id AS saleId, sales.date,
    products.product_id AS productId, products.quantity
    FROM sales
    INNER JOIN sales_products AS products
    ON sales.id = products.sale_id`,
  );
  
  return camelize(result);
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sales.date, products.product_id AS productId, products.quantity
    FROM sales
     INNER JOIN sales_products AS products
    ON sales.id = products.sale_id
    WHERE (sales.id = (?))`,
    [id],
  );
  return camelize(result);
};

module.exports = {
  insert,
  checkIds,
  getAllSales,
  getSalesById,
  
};