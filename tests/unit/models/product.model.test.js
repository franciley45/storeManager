const { expect } = require('chai');
const { stub, restore } = require('sinon')
const productModel = require('../../../src/models/product.model')
const mockProduct = require('../mocks/product.model.mocks')
const connection = require('../../../src/models/DB/connection')

describe('product Model', function () {
  describe('Lista todos os produtos', function () {
    beforeEach(function () {
      stub(connection, 'execute').resolves([mockProduct.productsList])
      
   })

    afterEach(function () {
      restore()
    })
    
    it('com o tipo array', async function () {
      const response = await productModel.getAllProducts()
      expect(response).to.be.a('array')
    })

    it('retorno teve sucesso', async function () {
      const response = await productModel.getAllProducts()
      expect(response).to.deep.equal(mockProduct.productsList)
    })
    describe('lista de produtos por "id"', function () {
      
      it('busca por id tipo object', async function () {
        const response = await productModel.getProductById()
        expect(response).to.be.a('object')
      })

      it('busca produto por id retorna o object esperado', async function () {
        const response = await productModel.getProductById(1)
        expect(response).to.deep.equal({ id: 1, name: 'Martelo de Thor' });
      })
    })
    
  })
})