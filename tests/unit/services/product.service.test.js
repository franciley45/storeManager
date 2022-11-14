const { expect } = require('chai');
const { stub, restore } = require('sinon');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.services');

const { productsListServices, productByIdServices, newProductmock } = require('./mocks/product.services.mocks');

describe('produto Services', function () {
  it('Recuperando a lista de produtos', async function () {
    stub(productModel, 'getAllProducts').resolves(productsListServices);
    const response = { type: null, message: productsListServices }
    const result = await productService.getProduct();
    expect(result).to.be.deep.equal(response);
  });

  it('busca um produto pelo Id', async function () {
    stub(productModel, 'getProductById').resolves(productByIdServices);
    const response = { type: null, message: productByIdServices }
    const result = await productService.getProductByIdServices(1);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno de erro busca por "id"', async function () {
    stub(productModel, 'getProductById').resolves(undefined);
    const response = { type: 404, message: 'Product not found' };
    const result = await productService.getProductByIdServices(99);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno ao adicionar produto', async function () {
    stub(productModel, 'newProduct').resolves(newProductmock);
    const response = { type: null, message: newProductmock }
    const result = await productService.newProductServices(newProductmock.name);
    expect(result).to.be.deep.equal(response);
  });

  afterEach(restore);
});


