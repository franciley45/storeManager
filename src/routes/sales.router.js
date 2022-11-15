const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validationsales } = require('../middlewares/validationsales');

const salesRouter = express.Router();

salesRouter.post('/', validationsales, salesController.createNewSales);

salesRouter.get('/', salesController.getAllSalesController);

salesRouter.get('/:id', salesController.getSalesByIdController);

module.exports = salesRouter;