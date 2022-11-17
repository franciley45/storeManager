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

  it('testa de update Product', async function () {
    stub(connection, 'execute').resolves(undefined);
    const result = await productModel.updateProduct(1,'deus');
    expect(result).to.be.deep.equal(undefined);
  });

  it('testa da função checkIdProduct', async function () {
    stub(connection, 'execute').resolves([{ id: 1 }]);
    const result = await productModel.checkIdProduct(1);
    expect(result).to.be.deep.equal({ id: 1 });
  });

  it('testa de delete Product', async function () {
    stub(connection, 'execute').resolves(undefined);
    const result = await productModel.deleteProduct(1);
    expect(result).to.be.deep.equal(undefined);
  })

  afterEach(restore);
});