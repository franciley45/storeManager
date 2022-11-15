const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const salesService = require('../../../src/services/sales.services')
const salesControlles =require('../../../src/controllers/sales.controller');
const { sales } = require('./mocks/sales.controller.mocks');


describe('teste de sales Controllers', function () {
  it('testa se a venda é Inserida corretamente', async function () {
    sinon.stub(salesService, 'insertSales').resolves({ type: null, message: { id: 10, itemsSold: sales } });

    const req = { body: { sales } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.createNewSales (req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 10, itemsSold: sales });
    sinon.restore()
  });

  it('testa se a venda é Inserida retorno de error', async function () {
    sinon.stub(salesService, 'insertSales').resolves({ type: 404, message: 'Product not found' });

    const req = { body: { sales } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.createNewSales(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
})