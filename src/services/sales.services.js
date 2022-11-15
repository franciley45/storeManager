const salesModels = require('../models/sales.model');

const insertSales = async (sale) => {
  /* console.log(sale); */
  const idsProducts = await sale.map(({ productId }) => productId);
  console.log(idsProducts);
  const idExist = await salesModels.checkIds(idsProducts);
  console.log(idExist);

  if (idExist.length !== idsProducts.length) return { type: 404, message: 'Product not found' };

  const idSale = await salesModels.insert(sale);

  console.log({ type: null, message: { id: idSale, itemsSold: sale } });

  return { type: null, message: { id: idSale, itemsSold: sale } };
};

module.exports = {
  insertSales,
};