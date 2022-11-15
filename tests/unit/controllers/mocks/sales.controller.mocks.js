const returnControllerSales = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 }
]
const sales = [
  { id: 1, date: '2022-11-11 21:00:58' },
  { id: 1, date: '2022-11-12 19:13:50' },
];

const returninsertSales = { type: null, message: { id: 5, itemsSold: [[Object], [Object]] } }

module.exports = {
  returnControllerSales,
  returninsertSales,
  sales,
}