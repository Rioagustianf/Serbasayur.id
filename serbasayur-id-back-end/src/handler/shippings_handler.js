const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllShippings(callback) {
  const sql = 'SELECT * FROM shippings';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getShippingById(idShipping, callback) {
  const sql = `SELECT * FROM shippings WHERE id_shipping='${idShipping}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addShippingHandler = (request, h) => {
  const {
    id_order: idOrder,
    shipping_address: shippingAddress,
    shipping_date: shippingDate,
    delivery_date: deliveryDate,
    shipping_status: shippingStatus,
  } = request.payload;

  const idShipping = `shipping-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO shippings(id_shipping, id_order, shipping_address, shipping_date, delivery_date, shipping_status) VALUES ('${idShipping}','${idOrder}','${shippingAddress}',${shippingDate},'${deliveryDate}','${shippingStatus}')`;

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
        message: 'Pengiriman berhasil ditambahkan',
        data: {
          id_shipping: idShipping,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllShippingsHandler = () => {
  const promise = new Promise((resolve) => {
    getAllShippings((results) => {
      const shippingsList = [];
      Object.keys(results).forEach((v) => {
        shippingsList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          payments: shippingsList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getShippingByIdHandler = (request, h) => {
  const { idShipping } = request.params;

  const promise = new Promise((resolve) => {
    getShippingById(idShipping, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            shipping: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Pengiriman tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editShippingByIdHandler = (request, h) => {
  const { idShipping } = request.params;

  const {
    id_order: idOrder,
    shipping_address: shippingAddress,
    shipping_date: shippingDate,
    delivery_date: deliveryDate,
    shipping_status: shippingStatus,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getShippingById(idShipping, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE shippings SET id_order='${idOrder}',shipping_address='${shippingAddress}',shipping_date=${shippingDate},delivery_date='${deliveryDate}',shipping_status='${shippingStatus}' WHERE id_shipping='${idShipping}'`;

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
            message: 'Pengiriman berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui pengiriman. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteShippingByIdHandler = (request, h) => {
  const { idShipping } = request.params;

  const promise = new Promise((resolve) => {
    getShippingById(idShipping, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM shippings WHERE id_shipping='${idShipping}'`;

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
            message: 'Pengiriman berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Pengiriman gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addShippingHandler,
  getAllShippingsHandler,
  getShippingByIdHandler,
  editShippingByIdHandler,
  deleteShippingByIdHandler,
};
