const { expect } = require('chai');
const { stub, restore } = require('sinon')
const connection = require('../../../src/models/DB/connection');
const producSales = require('../../../src/models/sales.model');
const { salesModel, returncheckIds, returnGetSalesById } = require('./mocks/sales.model.mocks');

describe('teste da Sales, Model', function () {
  it('teste da função insert', async function () {
    stub(connection, 'execute').resolves([{ insertId:10 }])
    const result = await producSales.insert(salesModel)
    expect(result).to.be.deep.equal(10);
    restore()
  })
  it('teste da função checkIds', async function () {
    stub(connection, 'execute').resolves(returncheckIds)
    const result = await producSales.checkIds([1, 2])
    expect(result).to.be.deep.equal(returncheckIds[0]);
    restore()
  })

  it('teste da função getAllSales', async function () {
    stub(connection, 'execute').resolves(salesModel)
    const result = await producSales.getAllSales()
    expect(result).to.be.deep.equal(salesModel[0]);
    restore()
  })

  it('teste da função getSalesById', async function () {
    stub(connection, 'execute').resolves(returnGetSalesById)
    const result = await producSales.getSalesById(1)
    expect(result).to.be.deep.equal(returnGetSalesById[0]);
    restore()
  })

  it('testa da função checkIdProduct', async function () {
    stub(connection, 'execute').resolves([{ id: 1 }]);
    const result = await producSales.checkIdSales(1);
    expect(result).to.be.deep.equal({ id: 1 });
    restore()
  });

  it('testa de delete Sales', async function () {
    stub(connection, 'execute').resolves(undefined);
    const result = await producSales.deleteSales(1);
    expect(result).to.be.deep.equal(undefined);
    restore()
  })
  
})