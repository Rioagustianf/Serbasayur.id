const { nanoid } = require('nanoid');
const db = require('./db_config');

async function getAllOrderItems(idOrder, callback) {
  const sql = `SELECT * FROM order_items WHERE id_order='${idOrder}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getOrderItemById(idOrder, idOrderItem, callback) {
  const sql = `SELECT * FROM order_items WHERE id_order_item='${idOrderItem}' AND id_order='${idOrder}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addOrderItemHandler = (request, h) => {
  const {
    id_order: idOrder,
    id_produk: idProduk,
    kuantitas,
    harga_satuan: hargaSatuan,
  } = request.payload;

  const idOrderItem = `orderitem-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO order_items(id_order_item, id_order, id_produk, quantity, harga_unit) VALUES ('${idOrderItem}','${idOrder}','${idProduk}',${kuantitas},${hargaSatuan})`;

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
        message: 'Item order berhasil ditambahkan',
        data: {
          id_order: idOrder,
          id_order_item: idOrderItem,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllOrderItemsHandler = (request) => {
  const { idOrder } = request.params;

  const promise = new Promise((resolve) => {
    getAllOrderItems(idOrder, (results) => {
      const orderItemsList = [];
      Object.keys(results).forEach((v) => {
        orderItemsList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          order_items: orderItemsList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getOrderItemByIdHandler = (request, h) => {
  const { idOrder, idOrderItem } = request.params;

  const promise = new Promise((resolve) => {
    getOrderItemById(idOrder, idOrderItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            order_item: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Item order tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editOrderItemByIdHandler = (request, h) => {
  const { idOrder, idOrderItem } = request.params;

  const {
    id_produk: idProduk,
    kuantitas,
    harga_satuan: hargaSatuan,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getOrderItemById(idOrder, idOrderItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE order_items SET id_produk='${idProduk}',quantity=${kuantitas},harga_unit=${hargaSatuan} WHERE id_order_item='${idOrderItem}' AND id_order='${idOrder}'`;

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
            message: 'Item order berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui item order. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteOrderItemByIdHandler = (request, h) => {
  const { idOrder, idOrderItem } = request.params;

  const promise = new Promise((resolve) => {
    getOrderItemById(idOrder, idOrderItem, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM order_items WHERE id_order_item='${idOrderItem}' AND id_order='${idOrder}'`;

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
            message: 'Item order berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Item order gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addOrderItemHandler,
  getAllOrderItemsHandler,
  getOrderItemByIdHandler,
  editOrderItemByIdHandler,
  deleteOrderItemByIdHandler,
};
