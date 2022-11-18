const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validationsales } = require('../middlewares/validationsales');

const salesRouter = express.Router();

salesRouter.post('/', validationsales, salesController.createNewSales);

salesRouter.get('/', salesController.getAllSalesController);

salesRouter.get('/:id', salesController.getSalesByIdController);

salesRouter.delete('/:id', salesController.deleteSalesController);

salesRouter.put('/:id',
  validationsales, salesController.updateSalesController);

module.exports = salesRouter;