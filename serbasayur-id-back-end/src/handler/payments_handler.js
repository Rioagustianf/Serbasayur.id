const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllPayments(callback) {
  const sql = 'SELECT * FROM payments';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getPaymentById(idPayment, callback) {
  const sql = `SELECT * FROM payments WHERE id_payment='${idPayment}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addPaymentHandler = (request, h) => {
  const {
    id_order: idOrder,
    payment_date: paymentDate,
    amount,
    payment_method: paymentMethod,
    payment_status: paymentStatus,
  } = request.payload;

  const idPayment = `payment-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO payments(id_payment, id_order, payment_date, amount, payment_method, payment_status) VALUES ('${idPayment}','${idOrder}','${paymentDate}',${amount},'${paymentMethod}','${paymentStatus}')`;

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
        message: 'Pembayaran berhasil ditambahkan',
        data: {
          id_payment: idPayment,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllPaymentsHandler = () => {
  const promise = new Promise((resolve) => {
    getAllPayments((results) => {
      const paymentsList = [];
      Object.keys(results).forEach((v) => {
        paymentsList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          payments: paymentsList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getPaymentByIdHandler = (request, h) => {
  const { idPayment } = request.params;

  const promise = new Promise((resolve) => {
    getPaymentById(idPayment, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            payment: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Pembayaran tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editPaymentByIdHandler = (request, h) => {
  const { idPayment } = request.params;

  const {
    id_order: idOrder,
    payment_date: paymentDate,
    amount,
    payment_method: paymentMethod,
    payment_status: paymentStatus,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getPaymentById(idPayment, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE payments SET id_order='${idOrder}',payment_date='${paymentDate}',amount=${amount},payment_method='${paymentMethod}',payment_status='${paymentStatus}' WHERE id_payment='${idPayment}'`;

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
            message: 'Pembayaran berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui pembayaran. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deletePaymentByIdHandler = (request, h) => {
  const { idPayment } = request.params;

  const promise = new Promise((resolve) => {
    getPaymentById(idPayment, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM payments WHERE id_payment='${idPayment}'`;

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
            message: 'Pembayaran berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Pembayaran gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addPaymentHandler,
  getAllPaymentsHandler,
  getPaymentByIdHandler,
  editPaymentByIdHandler,
  deletePaymentByIdHandler,
};
