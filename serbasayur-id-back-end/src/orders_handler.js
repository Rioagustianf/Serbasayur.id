const { nanoid } = require('nanoid');
const db = require('./db_config');

async function getAllOrders(callback) {
  const sql = 'SELECT * FROM orders';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getOrderById(idOrder, callback) {
  const sql = `SELECT * FROM orders WHERE id_order='${idOrder}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addOrderHandler = (request, h) => {
  const {
    id_user: idUser,
    tanggal_order: tanggalOrder,
    status,
    total_harga: totalHarga,
  } = request.payload;

  const idOrder = `order-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO orders(id_order, id_user, tanggal_order, status, total_harga) VALUES ('${idOrder}','${idUser}','${tanggalOrder}','${status}',${totalHarga})`;

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
        message: 'Order berhasil ditambahkan',
        data: {
          id_order: idOrder,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllOrdersHandler = () => {
  const promise = new Promise((resolve) => {
    getAllOrders((results) => {
      const ordersList = [];
      Object.keys(results).forEach((v) => {
        ordersList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          orders: ordersList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getOrderByIdHandler = (request, h) => {
  const { idOrder } = request.params;

  const promise = new Promise((resolve) => {
    getOrderById(idOrder, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            order: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Order tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editOrderByIdHandler = (request, h) => {
  const { idOrder } = request.params;

  const {
    id_user: idUser,
    tanggal_order: tanggalOrder,
    status,
    total_harga: totalHarga,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getOrderById(idOrder, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE orders SET id_user='${idUser}',tanggal_order='${tanggalOrder}',status='${status}',total_harga=${totalHarga} WHERE id_order='${idOrder}'`;

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
            message: 'Order berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui order. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteOrderByIdHandler = (request, h) => {
  const { idOrder } = request.params;

  const promise = new Promise((resolve) => {
    getOrderById(idOrder, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM orders WHERE id_order='${idOrder}'`;

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
            message: 'Order berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Order gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addOrderHandler,
  getAllOrdersHandler,
  getOrderByIdHandler,
  editOrderByIdHandler,
  deleteOrderByIdHandler,
};
