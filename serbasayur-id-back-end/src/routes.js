const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
} = require('./products_handler');

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
  {
    method: 'POST',
    path: '/users',
    handler: addProductHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/users/{idUser}',
    handler: getProductByIdHandler,
  },
  {
    method: 'PUT',
    path: '/users/{idUser}',
    handler: editProductByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/users/{idUser}',
    handler: deleteProductByIdHandler,
  },
];

module.exports = routes;
