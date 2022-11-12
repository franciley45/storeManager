const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

const { expect } = require('chai');
const sinon = require('sinon');


const productController = require('../../../src/controllers/product.controller')
const productModel = require('../../../src/models/product.model')
const productService = require('../../../src/services/product.services');
const { productsList, productById } = require('../mocks/product.model.mocks')


describe('produto controller ', function () {
  it('busca uma lista de produtos', async function () {
    sinon.stub(productService, 'getProduct').resolves({ type: null, message: productsList });

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsList);
  sinon.restore()
  });
 
  it('Se retorna um erro caso o get não de certo', async function () {
    sinon.stub(productService, 'getProduct').resolves({ type: 500, message: 'not found!' });

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductController(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'not found!' });
  });
})