const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/products',
    handler: addProductHandler,
  },
  {
    method: 'GET',
    path: '/products',
    handler: getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/products/{idProduk}',
    handler: getProductByIdHandler,
  },
  {
    method: 'PUT',
    path: '/products/{idProduk}',
    handler: editProductByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/products/{idProduk}',
    handler: deleteProductByIdHandler,
  },
];

module.exports = routes;
