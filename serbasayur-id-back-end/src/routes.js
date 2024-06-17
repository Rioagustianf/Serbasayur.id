const path = require('path');
const {
  addCategoryHandler,
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  editCategoryByIdHandler,
  deleteCategoryByIdHandler,
} = require('./categories_handler');
const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
} = require('./products_handler');
const {
  addUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByUsernamePasswordHandler,
  editUserByIdHandler,
  deleteUserByIdHandler,
} = require('./users_handler');
const {
  addOrderHandler,
  getAllOrdersHandler,
  getOrderByIdHandler,
  editOrderByIdHandler,
  deleteOrderByIdHandler,
} = require('./orders_handler');
const {
  addOrderItemHandler,
  getAllOrderItemsHandler,
  getOrderItemByIdHandler,
  editOrderItemByIdHandler,
  deleteOrderItemByIdHandler,
} = require('./order_items_handler');
const {
  addAdminHandler,
  getAllAdminsHandler,
  getAdminByIdHandler,
  getAdminByUsernamePasswordHandler,
  editAdminByIdHandler,
  deleteAdminByIdHandler,
} = require('./admins_handler');

const routes = [
  {
    method: 'POST',
    path: '/categories',
    handler: addCategoryHandler,
  },
  {
    method: 'GET',
    path: '/categories',
    handler: getAllCategoriesHandler,
  },
  {
    method: 'GET',
    path: '/categories/{idKategori}',
    handler: getCategoryByIdHandler,
  },
  {
    method: 'PUT',
    path: '/categories/{idKategori}',
    handler: editCategoryByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/categories/{idKategori}',
    handler: deleteCategoryByIdHandler,
  },
  {
    method: 'POST',
    path: '/products',
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
      },
    },
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
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
      },
    },
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
    handler: addUserHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUsersHandler,
  },
  {
    method: 'GET',
    path: '/users/{idUser}',
    handler: getUserByIdHandler,
  },
  {
    method: 'PUT',
    path: '/users/{idUser}',
    handler: editUserByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/users/{idUser}',
    handler: deleteUserByIdHandler,
  },
  {
    method: 'POST',
    path: '/login',
    handler: getUserByUsernamePasswordHandler,
  },
  {
    method: 'POST',
    path: '/adminlogin',
    handler: getAdminByUsernamePasswordHandler,
  },
  {
    method: 'POST',
    path: '/orders',
    handler: addOrderHandler,
  },
  {
    method: 'GET',
    path: '/orders',
    handler: getAllOrdersHandler,
  },
  {
    method: 'GET',
    path: '/orders/{idOrder}',
    handler: getOrderByIdHandler,
  },
  {
    method: 'PUT',
    path: '/orders/{idOrder}',
    handler: editOrderByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/orders/{idOrder}',
    handler: deleteOrderByIdHandler,
  },
  {
    method: 'POST',
    path: '/orderitems',
    handler: addOrderItemHandler,
  },
  {
    method: 'GET',
    path: '/orderitems/{idOrder}',
    handler: getAllOrderItemsHandler,
  },
  {
    method: 'GET',
    path: '/orderitems/{idOrder}/{idOrderItem}',
    handler: getOrderItemByIdHandler,
  },
  {
    method: 'PUT',
    path: '/orderitems/{idOrder}/{idOrderItem}',
    handler: editOrderItemByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/orderitems/{idOrder}/{idOrderItem}',
    handler: deleteOrderItemByIdHandler,
  },
  {
    method: 'POST',
    path: '/admins',
    handler: addAdminHandler,
  },
  {
    method: 'GET',
    path: '/admins',
    handler: getAllAdminsHandler,
  },
  {
    method: 'GET',
    path: '/admins/{idAdmin}',
    handler: getAdminByIdHandler,
  },
  {
    method: 'PUT',
    path: '/admins/{idAdmin}',
    handler: editAdminByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/admins/{idAdmin}',
    handler: deleteAdminByIdHandler,
  },
  {
    method: 'GET',
    path: '/image/{file*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '/image'),
      },
    },
  },
];

module.exports = routes;
