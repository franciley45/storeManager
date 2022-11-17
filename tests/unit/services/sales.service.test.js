const { expect } = require('chai');
const { stub, restore } = require('sinon');
const salestModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.services');
const { exitInsertSales, prohibitedInsertSales, returncheckIdsservicer, sales, returngetAllSales, allsalesmock, returnGetSalesByIdSevices, mockIdServices
} = require('./mocks/sales.services.mocks');

describe('teste sales, Services', function () {
  it('teste da função insertSales ', async function () {
    stub(salestModel, 'insert').resolves(11)
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal({ type: null, message: exitInsertSales });
    restore()
  })

 /*  it('teste da função insertSales error ', async function () {
    stub(salestModel, 'insert').resolves(11)
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });
    restore()
  }) */

  it('teste da função checkIds ', async function () {
    stub(salestModel, 'checkIds').resolves(30)
    const result = await await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });
    restore()
  })
  it('teste da função getAllSales ', async function () {
    stub(salestModel, 'getAllSales').resolves(returngetAllSales)
    const result = await salesService.getAllSalesServices()
    expect(result).to.be.deep.equal(allsalesmock);
    restore()
  })

  it('teste da função getSalesByIdSevicess ', async function () {
    stub(salestModel, 'getSalesById').resolves(returnGetSalesByIdSevices )
    const result = await salesService.getSalesByIdSevices(1)
    expect(result).to.be.deep.equal(mockIdServices);
    restore()
  })
  it('teste da função getSalesByIdSevicess error ', async function () {
    stub(salestModel, 'getSalesById').resolves([])
    const result = await salesService.getSalesByIdSevices(0)
    expect(result).to.be.deep.equal({ type: 404, message: 'Sale not found' });
    restore()
  })

  it('teste da função checkIdSales error dentro função deleteSales', async function () {
    stub(salestModel, 'checkIdSales').resolves([]);
    const response = { type: 404, message: 'Sale not found' }
    const result = await salesService.deleteSalesServices(1);
    expect(result).to.be.deep.equal(response);
    restore()
  });

  it('retorno delete Sales', async function () {
    stub(salestModel, 'checkIdSales').resolves([1]);
    const response = { type: null }
    const result = await salesService.deleteSalesServices(1);
    console.log(result)
    expect(result).to.be.deep.equal(response);

  });

})
