const { expect } = require('chai');
const { stub, restore } = require('sinon')
const productModel = require('../../../src/models/product.model')
const connection = require('../../../src/models/DB/connection')
const { productsListModel, productByIdModel } = require('./mocks/product.model.mocks');


describe('produto Model', function () {
  it('testa se todos os produto retorna', async function () {
    stub(connection, 'execute').resolves([productsListModel]);
    const result = await productModel.getAllProducts();
    expect(result).to.be.deep.equal(productsListModel);
  });

  it('testa se busca produto por Id', async function () {
    stub(connection, 'execute').resolves([[productsListModel]]);
    const result = await productModel.getProductById(1);
    expect(result).to.be.deep.equal(productsListModel);
  });

  it('testa se adicona novo produto', async function () {
    stub(connection, 'execute').resolves([{ insertId:10 }]);
    const { id } = await productModel.newProduct('deus');
    expect(id).to.be.deep.equal(10);
  });
  afterEach(restore);
});