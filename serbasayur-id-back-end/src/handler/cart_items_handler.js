const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllCartItems(idCart, callback) {
  const sql = `SELECT * FROM cart_items WHERE id_cart='${idCart}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getCartItemById(idCart, idCartItem, callback) {
  const sql = `SELECT * FROM cart_items WHERE id_cart='${idCart}' AND id_cart_item='${idCartItem}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addCartItemHandler = (request, h) => {
  const {
    id_cart: idCart,
    id_produk: idProduk,
    quantity,
  } = request.payload;

  const idCartItem = `cartitem-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO cart_items(id_cart_item, id_cart, id_produk, quantity) VALUES ('${idCartItem}','${idCart}','${idProduk}',${quantity})`;

    db.query(sql, (err) => {
      if (err) {
        const response = h.response({
          status: 'fail',
          message: err.message,
        });
        response.code(500);
        resolve(response);
      }
      const response = h.response({
        status: 'success',
        message: 'Item keranjang berhasil ditambahkan',
        data: {
          id_cart: idCart,
          id_cart_item: idCartItem,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllCartItemsHandler = (request, h) => {
  const { idCart } = request.params;

  const promise = new Promise((resolve) => {
    getAllCartItems(idCart, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const cartItemsList = [];
        Object.keys(results).forEach((v) => {
          cartItemsList.push(results[v]);
        });
        const response = {
          status: 'success',
          data: {
            cart_items: cartItemsList,
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Item keranjang tidak ditemukan. Keranjang tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const getCartItemByIdHandler = (request, h) => {
  const { idCart, idCartItem } = request.params;

  const promise = new Promise((resolve) => {
    getCartItemById(idCart, idCartItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            cart_item: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Item keranjang tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editCartItemByIdHandler = (request, h) => {
  const { idCart, idCartItem } = request.params;

  const {
    id_produk: idProduk,
    quantity,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getCartItemById(idCart, idCartItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE cart_items SET id_produk='${idProduk}',quantity=${quantity} WHERE id_cart_item='${idCartItem}' AND id_cart='${idCart}'`;

        db.query(sql, (err) => {
          if (err) {
            const response = h.response({
              status: 'fail',
              message: err.message,
            });
            response.code(500);
            resolve(response);
          }
          const response = h.response({
            status: 'success',
            message: 'Item keranjang berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui item keranjang. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteCartItemByIdHandler = (request, h) => {
  const { idCart, idCartItem } = request.params;

  const promise = new Promise((resolve) => {
    getCartItemById(idCart, idCartItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM cart_items WHERE id_cart_item='${idCartItem}'`;

        db.query(sql, (err) => {
          if (err) {
            const response = h.response({
              status: 'fail',
              message: err.message,
            });
            response.code(500);
            resolve(response);
          }
          const response = h.response({
            status: 'success',
            message: 'Item keranjang berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Item keranjang gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addCartItemHandler,
  getAllCartItemsHandler,
  getCartItemByIdHandler,
  editCartItemByIdHandler,
  deleteCartItemByIdHandler,
};
