const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productService = require('../../../src/services/product.services');
const productController = require('../../../src/controllers/product.controller');

const { productsListController, productByIdController } = require('./mocks/product.controller.mocks');

describe('produto Controller', function () {
  it('busca todos produtos', async function () {
    sinon.stub(productService, 'getProduct').resolves({ type: null, message: productsListController });

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsListController);
  });

  it('busca todos produtos error', async function () {
    sinon.stub(productService, 'getProduct').resolves({ type: 404 });

    const req = {};

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith();
  });

  it('busca produto pelo Id', async function () {
    sinon.stub(productService, 'getProductByIdServices').resolves({ type: null, message: productByIdController });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productByIdController);
  });

  it('busca por id em caso de error', async function () {
    sinon.stub(productService, 'getProductByIdServices').resolves({ type: 404, message: 'Product not found' });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductByIdController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('adicionar novo produto retorno', async function () {
    sinon.stub(productService, 'newProductServices').resolves({ type: null, message: productByIdController });

    const req = { body: { name: "Martelo de Thor" } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.newProductController(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productByIdController);
  });

  it('retorno de error caso ao adicionar produto de falha', async function () {
    sinon.stub(productService, 'newProductServices').resolves({ type: 404, message: 'error to add product' });

    const req = { body: { name: "Martelo de Thor" } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.newProductController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'error to add product' });
  });

  it('retorno ao editar produto', async function () {
    sinon.stub(productService, 'updateProductServices').resolves({ type: null, message: productByIdController });
  
      const req = { params: { id: 1 }, body: { name: "Martelo de Thor" } };
  
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      await productController.updateProductController(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productByIdController);
  });
  
  it('retorno ao editar produto error', async function () {
    sinon.stub(productService, 'updateProductServices').resolves({ type: 404, message: 'Product not found' });

    const req = { params: { id: 1 }, body: { name: "Martelo de Thor" } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.updateProductController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('retorno ao deletar produto error', async function () {
    sinon.stub(productService, 'deleteProductServices').resolves({ type: 404, message: 'Product not found' });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.deleteProductController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('retorno ao deletar produto', async function () {
    sinon.stub(productService, 'deleteProductServices').resolves({ type: null });

    const req = { params: { id: 1 } };

    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.deleteProductController(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });

  it('retorno busca por produto via Includes', async function () {
    sinon.stub(productService, 'getAllProductsByIncludes').resolves({ type: 200, message: [{ id: 1, name: 'Martelo de Thor' }] });

    const req = { query: { q: 'Martelo' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAllProductsByIncludes(req, res);

    expect(res.status).to.have.been.calledWith(200);
    /* expect(res.json).to.have.been.calledWith({ message: [{ id: 1, name: 'Martelo de Thor' }] }); */
  });

  it('retorno busca por produto via Includes não encontrando nome', async function () {
    sinon.stub(productService, 'getAllProductsByIncludes').resolves({ type: null, message: productsListController });

    const req = { query: { q: 'fff' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAllProductsByIncludes(req, res);

    expect(res.status).to.have.been.calledWith(200);
   /*  expect(res.json).to.have.been.calledWith({ message: productsListController }); */
  });

  afterEach(sinon.restore);
});