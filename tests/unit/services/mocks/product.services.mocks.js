const productsListServices = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
]
const productByIdServices = {
  id: 1,
  name: "Martelo de Thor"
};

const newProductmock = { id: 10, name: 'deus' }

const updatemock = { type: null, message: { id: 1, name: 'Martelo de Thor' } }

module.exports = {
  productsListServices,
  productByIdServices,
  newProductmock,
  updatemock,
}