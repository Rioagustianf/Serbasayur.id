const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllCarts(idUser, callback) {
  const sql = `SELECT * FROM carts WHERE id_user='${idUser}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getCartById(idUser, idOrder, callback) {
  const sql = `SELECT * FROM carts WHERE id_user='${idUser}' AND id_order='${idOrder}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addCartHandler = (request, h) => {
  const {
    id_user: idUser,
  } = request.payload;

  const idCart = `cart-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO carts(id_cart, id_user) VALUES ('${idCart}','${idUser}')`;

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
        message: 'Keranjang berhasil ditambahkan',
        data: {
          id_cart: idCart,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllCartsHandler = (request, h) => {
  const { idUser } = request.params;

  const promise = new Promise((resolve) => {
    getAllCarts(idUser, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const cartsList = [];
        Object.keys(results).forEach((v) => {
          cartsList.push(results[v]);
        });
        const response = {
          status: 'success',
          data: {
            carts: cartsList,
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Keranjang tidak ditemukan. User tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const getCartByIdHandler = (request, h) => {
  const { idUser, idCart } = request.params;

  const promise = new Promise((resolve) => {
    getCartById(idUser, idCart, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            cart: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Keranjang tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const deleteCartByIdHandler = (request, h) => {
  const { idUser, idCart } = request.params;

  const promise = new Promise((resolve) => {
    getCartById(idUser, idCart, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM carts WHERE id_cart='${idCart}'`;

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
            message: 'Keranjang berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Keranjang gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addCartHandler,
  getAllCartsHandler,
  getCartByIdHandler,
  deleteCartByIdHandler,
};
