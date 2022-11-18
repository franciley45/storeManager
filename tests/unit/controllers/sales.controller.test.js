const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const salesService = require('../../../src/services/sales.services')
const salesControlles =require('../../../src/controllers/sales.controller');
const { sales, getAllSalesServices, mockssales, returnControllerSales, returnUpdateSales, } = require('./mocks/sales.controller.mocks');


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
    sinon.restore()
  });

  it('testa de busca de todos produtos', async function () {
    sinon.stub(salesService, 'getAllSalesServices').resolves({ type: null, message: getAllSalesServices});

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.getAllSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(getAllSalesServices);
    sinon.restore()
  });

  it('testa de busca de todos produtos error', async function () {
    sinon.stub(salesService, 'getAllSalesServices').resolves({ type: 404, message: 'Product not found' });

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.getAllSalesController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    sinon.restore()
  });

  it('testa de busca de todos produtos por id', async function () {
    sinon.stub(salesService, 'getSalesByIdSevices').resolves({ type: null, message: mockssales });

    const req = { params: { id: 1 } }

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.getSalesByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockssales);
    sinon.restore()
  });

  it('testa de busca de todos produtos por id error', async function () {
    sinon.stub(salesService, 'getSalesByIdSevices').resolves({ type: 404, message: 'Product not found' });

    const req = { params: { id: 1 } }

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.getSalesByIdController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    sinon.restore()
  });

  it('retorno ao deletar sales error', async function () {
    sinon.stub(salesService, 'deleteSalesServices').resolves({ type: 404, message: "Sale not found" });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.deleteSalesController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
    sinon.restore()
  });

  it('retorno ao deletar sales', async function () {
    sinon.stub(salesService, 'deleteSalesServices').resolves({ type: null });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.deleteSalesController(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
    sinon.restore()
  });

  it('retorno ao update Sales sales error', async function () {
    sinon.stub(salesService, 'updateSalesServices').resolves({ type: 404, message: "Sale not found" });

    const req = { params: { id: 1 }, body: returnControllerSales }

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.updateSalesController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
    sinon.restore()
  });

  it('retorno ao update Sales sales error', async function () {
    sinon.stub(salesService, 'updateSalesServices').resolves({ type:null, message: returnUpdateSales });

    const req = { params: { id: 1 }, body: returnControllerSales }

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesControlles.updateSalesController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(returnUpdateSales);
    sinon.restore()
  });
})