const { expect } = require('chai');
const { stub, restore } = require('sinon');
const salestModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.services');
const { exitInsertSales, prohibitedInsertSales, returncheckIdsservicer, sales } = require('./mocks/sales.services.mocks');

describe('teste sales, Services', function () {
  it('teste da função insertSales ', async function () {
    stub(salestModel, 'insert').resolves(11)
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal({ type: null, message: exitInsertSales } );
  })
  
 /*  it('Recupera a lista de vendas', async function () {
    stub(salestModel, 'insert').resolves(sales);
    const response = { type: null, message: sales }
    const result = await salesService.insertSales();
    expect(result).to.be.deep.equal(response);
  }); */
})

/* {
  id: 11,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5
      },
    ]
},
type: null, */