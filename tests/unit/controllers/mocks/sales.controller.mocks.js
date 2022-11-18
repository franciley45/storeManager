const returnControllerSales = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 }
]
const sales = [
  { id: 1, date: '2022-11-11 21:00:58' },
  { id: 1, date: '2022-11-12 19:13:50' },
];

const getAllSalesServices = [
  {
    saleId: 1,
    date: "2022-11-15T23:13:07.000Z",
    productId: 1,
    quantity: 5
  }
]

const mockssales = [
  { date: '2022-11-15T23:13:07.000Z', productId: 1, quantity: 5 },
  { date: '2022-11-15T23:13:07.000Z', productId: 2, quantity: 10 }
]

const returnUpdateSales = {
  saleId: 2,
  itemsUpdated: [
    {
      productId: 1,
      quantity: 10,
    },
    {
      productId: 2,
      quantity: 50,
    }
  ]
}

module.exports = {
  returnControllerSales,
  getAllSalesServices,
  sales,
  mockssales,
  returnUpdateSales,
}