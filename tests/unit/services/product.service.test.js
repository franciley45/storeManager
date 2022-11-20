const { expect } = require('chai');
const { stub, restore } = require('sinon');
const productModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.services');

const { productsListServices, productByIdServices, newProductmock, updatemock } = require('./mocks/product.services.mocks');

describe('produto Services', function () {
  it('Recuperando a lista de produtos', async function () {
    stub(productModel, 'getAllProducts').resolves(productsListServices);
    const response = { type: null, message: productsListServices }
    const result = await productService.getProduct();
    expect(result).to.be.deep.equal(response);
  });

  it('Recuperando a lista de produtos error', async function () {
    stub(productModel, 'getAllProducts').resolves(undefined);
    const response = { type: 404, message: 'Product not found' }
    const result = await productService.getProduct();
    expect(result).to.be.deep.equal(response);
  })

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

  it('retorno ao editar produto full', async function () {
    stub(productModel, 'checkIdProduct').resolves([1, 2]);
    stub(productModel, 'updateProduct').resolves(undefined);
    const response = { type: null, message: productByIdServices }
    const result = await productService.updateProductServices(1, productByIdServices.name);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno ao editar produto, msg Product not found full', async function () {
    stub(productModel, 'checkIdProduct').resolves([]);
    stub(productModel, 'updateProduct').resolves(undefined);
    const response = { type: 404, message: 'Product not found' }
    const result = await productService.updateProductServices(1, productByIdServices.name);
    expect(result).to.be.deep.equal(response);
  });
  
  it('retorno update produto', async function () {
    stub(productModel, 'checkIdProduct').resolves([1, 2]);
    stub(productModel, 'deleteProduct').resolves(undefined);
    const response = { type: null }
    const result = await productService.deleteProductServices(1);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno update produto Product not found full', async function () {
    stub(productModel, 'checkIdProduct').resolves([]);
    stub(productModel, 'deleteProduct').resolves(undefined);
    const response = { type: 404, message: 'Product not found' }
    const result = await productService.deleteProductServices(1);
    expect(result).to.be.deep.equal(response);
  });

  it('retorno getAllProductsByIncludes  se tudo de certo', async function () {
    stub(productModel, 'getAllProducts').resolves(productsListServices);

    const response = { type: null, message: [{ id: 1, name: 'Martelo de Thor' }] }
    const result  = await productService.getAllProductsByIncludes('Martelo');
    expect(result).to.be.deep.equal(response);
  });

  it('retorno getAllProductsByIncludes  se não encontra a busca pelo nome', async function () {
    stub(productModel, 'getAllProducts').resolves([]);
    const response = { type: 200, message: [] }
    const result = await productService.getAllProductsByIncludes('deus');
    expect(result).to.be.deep.equal(response);
  })

  afterEach(restore);
});