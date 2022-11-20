const { expect } = require('chai');
const { stub, restore } = require('sinon');
const salestModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.services');
const { exitInsertSales, prohibitedInsertSales, returncheckIdsservicer, sales, returngetAllSales, allsalesmock, returnGetSalesByIdSevices, mockIdServices, mockupdateSalesServices
} = require('./mocks/sales.services.mocks');

describe('teste de sales, Services', function () {
  it('teste da função insertSales ', async function () {
    stub(salestModel, 'checkIds').resolves(returncheckIdsservicer)
    stub(salestModel, 'insert').resolves(11)
    const response = { type: null, message: exitInsertSales }
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal(response);
    restore()
  })

  it('teste da função insertSales dando error ', async function () {
    stub(salestModel, 'checkIds').resolves([{ id: 2, name: 'Traje de encolhimento' }])
    stub(salestModel, 'insert').resolves(11)
    const response = { type: 404, message: 'Product not found' }
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal(response);
    restore()
  })

  it('teste da função getAllSales fica ', async function () {
    stub(salestModel, 'getAllSales').resolves(returngetAllSales)
    const result = await salesService.getAllSalesServices()
    expect(result).to.be.deep.equal(allsalesmock);
    restore()
  })

  it('teste da função getSalesByIdSevicess fica ', async function () {
    stub(salestModel, 'getSalesById').resolves(returnGetSalesByIdSevices)
    const result = await salesService.getSalesByIdSevices(1)
    expect(result).to.be.deep.equal(mockIdServices);
    restore()
  })

  it('teste da função getSalesByIdSevicess error fica', async function () {
    stub(salestModel, 'getSalesById').resolves([])
    const result = await salesService.getSalesByIdSevices(0)
    expect(result).to.be.deep.equal({ type: 404, message: 'Sale not found' });
    restore()
  })

  it('teste da função deleteSales dano eror', async function () {
    stub(salestModel, 'checkIdSales').resolves([]);
    stub(salestModel, 'deleteSales').resolves(undefined);
    const response = { type: 404, message: 'Sale not found' }
    const result = await salesService.deleteSalesServices(1);
    expect(result).to.be.deep.equal(response);
    restore()
  });

  it('teste da função deleteSales  ', async function () {
    stub(salestModel, 'checkIdSales').resolves([1]);
    stub(salestModel, 'deleteSales').resolves(undefined);
    const response = { type: null }
    const result = await salesService.deleteSalesServices(1);
    expect(result).to.be.deep.equal(response);
    restore()
  });

  it('teste da função updateSalesServices', async function () {
    stub(salestModel, 'checkIdSales').resolves([1]);
    stub(salestModel, 'checkIds').resolves(returncheckIdsservicer);
    stub(salestModel, 'updateSales').resolves(undefined);
    const { message: { itemsUpdated } } = await salesService.updateSalesServices(1, prohibitedInsertSales);
    expect(itemsUpdated).to.be.deep.equal(mockupdateSalesServices);
    restore()
  });

  it('teste da função updateSalesServices erro Sale not found', async function () {
    stub(salestModel, 'checkIdSales').resolves([]);
    stub(salestModel, 'checkIds').resolves(returncheckIdsservicer);
    stub(salestModel, 'updateSales').resolves(undefined);
    const response = { type: 404, message: 'Sale not found' }
    const result = await salesService.updateSalesServices(1, prohibitedInsertSales);
    expect(result).to.be.deep.equal(response);
    restore()
  });

  it('teste da função updateSalesServices erro Product not found', async function () {
    stub(salestModel, 'checkIdSales').resolves([1]);
    stub(salestModel, 'checkIds').resolves([{ id: 2, name: 'Traje de encolhimento' }]);
    stub(salestModel, 'updateSales').resolves(undefined);
    const response = { type: 404, message: 'Product not found' }
    const result = await salesService.updateSalesServices(1, prohibitedInsertSales);
    expect(result).to.be.deep.equal(response);
    restore()
  });
})