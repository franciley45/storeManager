const prohibitedInsertSales = [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]

const exitInsertSales = {
  id: 11,
  itemsSold: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]
}

const returncheckIdsservicer = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' }
]

module.exports = {
  prohibitedInsertSales,
  exitInsertSales,
  returncheckIdsservicer,
}