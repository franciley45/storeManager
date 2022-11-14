const { expect } = require('chai');
const { stub, restore } = require('sinon');
const salestModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.services');
const { exitInsertSales, prohibitedInsertSales, returncheckIdsservicer } = require('./mocks/sales.services.mocks');

describe('teste sales, Services', function () {
  it('teste da função insertSales ', async function () {
    stub(salestModel, 'insert').resolves(11)
    const result = await salesService.insertSales(prohibitedInsertSales)
    expect(result).to.be.deep.equal(exitInsertSales);
  })
  
 /*  it('teste da função checkIds ', async function () {
    stub(salestModel, 'checkIds').resolves(returncheckIdsservicer)
    let gol;
    await salesService.insertSales(prohibitedInsertSales)
    const result = await salestModel.checkIds([1])
    const comparacao =  result.length !== 2
    expect(new Error).to.be.an('error');
  }) */
})