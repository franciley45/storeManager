const salesModel = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const returnGetSalesById = [
  {
    date: "2022-11-15T21:07:10.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-11-15T21:07:10.000Z",
    productId: 2,
    quantity: 10
  }
]

const returncheckIds = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' }
]

module.exports = {
  salesModel,
  returncheckIds,
  returnGetSalesById,
};