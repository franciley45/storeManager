const { expect } = require('chai');
const { stub, restore } = require('sinon')
const productModel = require('../../../src/models/product.model')
/* const mockProduct = require('../mocks/product.model.mocks') */
const connection = require('../../../src/models/DB/connection')
const { productsList, productById } = require('../mocks/product.model.mocks');


describe('produto Model', function () {
  it('testa se todos os produto retorna', async function () {
    stub(connection, 'execute').resolves([productsList]);
    const result = await productModel.getAllProducts();
    expect(result).to.be.deep.equal(productsList);
  });

  it('testa se busca produto por Id', async function () {
    stub(connection, 'execute').resolves([[productsList]]);
    const result = await productModel.getProductById(1);
    expect(result).to.be.deep.equal(productsList);
  });

  it('testa se adicona novo produto', async function () {
    stub(connection, 'execute').resolves([[productsList]]);
    const result = await productModel.newProduct('deus');
    console.log(result)
    expect(result).to.be.deep.equal(productsList);
  });
  afterEach(restore);
});