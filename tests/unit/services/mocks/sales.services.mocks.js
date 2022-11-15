const prohibitedInsertSales = [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]

const exitInsertSales = {
  id: 11,
  itemsSold: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 5 }]
}

const returncheckIdsservicer = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' }
]
const sales = [
  { id: 1, date: '2022-11-11 21:00:58' },
  { id: 1, date: '2022-11-12 19:13:50' },
];

module.exports = {
  prohibitedInsertSales,
  exitInsertSales,
  returncheckIdsservicer,
  sales,
}