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
  /* console.log(insertId); */
  return insertId;
};

const checkIds = async (ids) => {
  /* console.log(ids); */
  const [results] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE id IN (${ids.join(', ')})`,
  );
  /* console.log(results); */
  return results;
};

module.exports = {
  insert,
  checkIds,
};