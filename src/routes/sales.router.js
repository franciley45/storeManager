const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validationsales } = require('../middlewares/validationsales');

const salesRouter = express.Router();

salesRouter.post('/', validationsales, salesController.createNewSales);

module.exports = salesRouter;