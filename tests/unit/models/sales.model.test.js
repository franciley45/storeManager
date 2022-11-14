const { expect } = require('chai');
const { stub, restore } = require('sinon')
const connection = require('../../../src/models/DB/connection');
const producSales = require('../../../src/models/sales.model');
const { salesModel, returncheckIds } = require('./mocks/sales.model.mocks');

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
  })
})