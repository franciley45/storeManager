const salesModels = require('../models/sales.model');

const insertSales = async (sale) => {
  const idsProducts = await sale.map(({ productId }) => productId);
  
  const idExist = await salesModels.checkIds(idsProducts);

  if (idExist.length !== idsProducts.length) return { type: 404, message: 'Product not found' };

  const idSale = await salesModels.insert(sale);

  return { type: null, message: { id: idSale, itemsSold: sale } };
};

module.exports = {
  insertSales,
};