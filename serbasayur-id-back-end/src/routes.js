const path = require("path");
const {
  addCategoryHandler,
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  editCategoryByIdHandler,
  deleteCategoryByIdHandler,
} = require("./handler/categories_handler");
const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
} = require("./handler/products_handler");
const {
  addUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByUsernamePasswordHandler,
  editUserByIdHandler,
  deleteUserByIdHandler,
} = require("./handler/users_handler");
const {
  addCartHandler,
  getAllCartsHandler,
  getCartByIdHandler,
  deleteCartByIdHandler,
} = require("./handler/carts_handler");
const {
  addOrderHandler,
  getAllOrdersHandler,
  getOrderByIdHandler,
  editOrderByIdHandler,
  deleteOrderByIdHandler,
} = require("./handler/orders_handler");
const {
  addOrderItemHandler,
  getAllOrderItemsHandler,
  getOrderItemByIdHandler,
  editOrderItemByIdHandler,
  deleteOrderItemByIdHandler,
} = require("./handler/order_items_handler");
const {
  addAdminHandler,
  getAllAdminsHandler,
  getAdminByIdHandler,
  getAdminByUsernamePasswordHandler,
  editAdminByIdHandler,
  deleteAdminByIdHandler,
} = require("./handler/admins_handler");
const {
  addCartItemHandler,
  getAllCartItemsHandler,
  getCartItemByIdHandler,
  editCartItemByIdHandler,
  deleteCartItemByIdHandler,
} = require("./handler/cart_items_handler");

const routes = [
  {
    method: "POST",
    path: "/categories",
    handler: addCategoryHandler,
  },
  {
    method: "GET",
    path: "/categories",
    handler: getAllCategoriesHandler,
  },
  {
    method: "GET",
    path: "/categories/{idKategori}",
    handler: getCategoryByIdHandler,
  },
  {
    method: "PUT",
    path: "/categories/{idKategori}",
    handler: editCategoryByIdHandler,
  },
  {
    method: "DELETE",
    path: "/categories/{idKategori}",
    handler: deleteCategoryByIdHandler,
  },
  {
    method: "POST",
    path: "/products",
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        output: "stream",
      },
    },
    handler: addProductHandler,
  },
  {
    method: "GET",
    path: "/products",
    handler: getAllProductsHandler,
  },
  {
    method: "GET",
    path: "/products/{idProduk}",
    handler: getProductByIdHandler,
  },
  {
    method: "PUT",
    path: "/products/{idProduk}",
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        output: "stream",
      },
    },
    handler: editProductByIdHandler,
  },
  {
    method: "DELETE",
    path: "/products/{idProduk}",
    handler: deleteProductByIdHandler,
  },
  {
    method: "POST",
    path: "/users",
    handler: addUserHandler,
  },
  {
    method: "GET",
    path: "/users",
    handler: getAllUsersHandler,
  },
  {
    method: "GET",
    path: "/users/{idUser}",
    handler: getUserByIdHandler,
  },
  {
    method: "PUT",
    path: "/users/{idUser}",
    handler: editUserByIdHandler,
  },
  {
    method: "DELETE",
    path: "/users/{idUser}",
    handler: deleteUserByIdHandler,
  },
  {
    method: "POST",
    path: "/login",
    handler: getUserByUsernamePasswordHandler,
  },
  {
    method: "POST",
    path: "/adminlogin",
    handler: getAdminByUsernamePasswordHandler,
  },
  {
    method: "POST",
    path: "/carts",
    handler: addCartHandler,
  },
  {
    method: "GET",
    path: "/carts/{idUser}",
    handler: getAllCartsHandler,
  },
  {
    method: "GET",
    path: "/carts/{idUser}/{idCart}",
    handler: getCartByIdHandler,
  },
  {
    method: "DELETE",
    path: "/carts/{idUser}/{idCart}",
    handler: deleteCartByIdHandler,
  },
  {
    method: "POST",
    path: "/cartitems",
    handler: addCartItemHandler,
  },
  {
    method: "GET",
    path: "/cartitems/{idCart}",
    handler: getAllCartItemsHandler,
  },
  {
    method: "GET",
    path: "/cartitems/{idCart}/{idCartItem}",
    handler: getCartItemByIdHandler,
  },
  {
    method: "PUT",
    path: "/cartitems/{idCart}/{idCartItem}",
    handler: editCartItemByIdHandler,
  },
  {
    method: "DELETE",
    path: "/cartitems/{idCart}/{idCartItem}",
    handler: deleteCartItemByIdHandler,
  },
  {
    method: "POST",
    path: "/orders",
    handler: addOrderHandler,
  },
  {
    method: "GET",
    path: "/orders",
    handler: getAllOrdersHandler,
  },
  {
    method: "GET",
    path: "/orders/{idOrder}",
    handler: getOrderByIdHandler,
  },
  {
    method: "PUT",
    path: "/orders/{idOrder}",
    handler: editOrderByIdHandler,
  },
  {
    method: "DELETE",
    path: "/orders/{idOrder}",
    handler: deleteOrderByIdHandler,
  },
  {
    method: "POST",
    path: "/orderitems",
    handler: addOrderItemHandler,
  },
  {
    method: "GET",
    path: "/orderitems/{idOrder}",
    handler: getAllOrderItemsHandler,
  },
  {
    method: "GET",
    path: "/orderitems/{idOrder}/{idOrderItem}",
    handler: getOrderItemByIdHandler,
  },
  {
    method: "PUT",
    path: "/orderitems/{idOrder}/{idOrderItem}",
    handler: editOrderItemByIdHandler,
  },
  {
    method: "DELETE",
    path: "/orderitems/{idOrder}/{idOrderItem}",
    handler: deleteOrderItemByIdHandler,
  },
  {
    method: "POST",
    path: "/payments",
    handler: addPaymentHandler,
  },
  {
    method: "GET",
    path: "/payments",
    handler: getAllPaymentsHandler,
  },
  {
    method: "GET",
    path: "/payments/{idPayment}",
    handler: getPaymentByIdHandler,
  },
  {
    method: "PUT",
    path: "/payments/{idPayment}",
    handler: editPaymentByIdHandler,
  },
  {
    method: "DELETE",
    path: "/payments/{idPayment}",
    handler: deletePaymentByIdHandler,
  },
  {
    method: "POST",
    path: "/shippings",
    handler: addShippingHandler,
  },
  {
    method: "GET",
    path: "/shippings",
    handler: getAllShippingsHandler,
  },
  {
    method: "GET",
    path: "/shippings/{idShipping}",
    handler: getShippingByIdHandler,
  },
  {
    method: "PUT",
    path: "/shippings/{idShipping}",
    handler: editShippingByIdHandler,
  },
  {
    method: "DELETE",
    path: "/shippings/{idShipping}",
    handler: deleteShippingByIdHandler,
  },
  {
    method: "POST",
    path: "/admins",
    handler: addAdminHandler,
  },
  {
    method: "GET",
    path: "/admins",
    handler: getAllAdminsHandler,
  },
  {
    method: "GET",
    path: "/admins/{idAdmin}",
    handler: getAdminByIdHandler,
  },
  {
    method: "PUT",
    path: "/admins/{idAdmin}",
    handler: editAdminByIdHandler,
  },
  {
    method: "DELETE",
    path: "/admins/{idAdmin}",
    handler: deleteAdminByIdHandler,
  },
  {
    method: "GET",
    path: "/image/{file*}",
    handler: {
      directory: {
        path: path.resolve(__dirname, "../image"),
      },
    },
  },
];

module.exports = routes;
