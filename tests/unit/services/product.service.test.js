const { expect } = require('chai');
const { stub, restore } = require('sinon');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.services');

const { productsList, productById } = require('../mocks/product.model.mocks');

describe('tabela produtos', function () {
  it('Recuperando a lista de produtos', async function () {
    stub(productModel, 'getAllProducts').resolves(productsList);
    const response = { type: null, message: productsList }
    const result = await productService.getProduct();
    expect(result).to.be.deep.equal(response);
  });

  it('busca um produto pelo Id', async function () {
    stub(productModel, 'getProductById').resolves(productById);
    const response = { type: null, message: productById }
    const result = await productService.getProductByIdServices(1);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno de erro busca por "id"', async function () {
    stub(productModel, 'getProductById').resolves(undefined);
    const response = { type: 404, message: 'Product not found' };
    const result = await productService.getProductByIdServices(99);
    expect(result).to.be.deep.equal(response);
  });

  afterEach(restore);
});


