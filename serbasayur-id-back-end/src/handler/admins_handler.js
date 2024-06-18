const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllAdmins(callback) {
  const sql = 'SELECT * FROM admins';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getAdminById(idAdmin, callback) {
  const sql = `SELECT * FROM admins WHERE id_admin='${idAdmin}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getAdminByUsernamePassword(username, password, callback) {
  const sql = `SELECT * FROM admins WHERE username='${username}' AND password='${password}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addAdminHandler = (request, h) => {
  const {
    username, email, password,
  } = request.payload;

  const idAdmin = `admin-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO admins(id_admin, username, email, password) VALUES ('${idAdmin}','${username}','${email}','${password}')`;

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
        message: 'User admin berhasil ditambahkan',
        data: {
          id_admin: idAdmin,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllAdminsHandler = () => {
  const promise = new Promise((resolve) => {
    getAllAdmins((results) => {
      const adminsList = [];
      Object.keys(results).forEach((v) => {
        adminsList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          admins: adminsList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getAdminByIdHandler = (request, h) => {
  const { idAdmin } = request.params;

  const promise = new Promise((resolve) => {
    getAdminById(idAdmin, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            admin: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'User admin tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const getAdminByUsernamePasswordHandler = (request, h) => {
  const { username, password } = request.payload;

  const promise = new Promise((resolve) => {
    getAdminByUsernamePassword(username, password, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            user: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Username/password salah',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editAdminByIdHandler = (request, h) => {
  const { idAdmin } = request.params;

  const {
    username, email, password,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getAdminById(idAdmin, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE admins SET username='${username}',email='${email}',password='${password}' WHERE id_admin='${idAdmin}'`;

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
            message: 'User admin berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui user admin. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteAdminByIdHandler = (request, h) => {
  const { idAdmin } = request.params;

  const promise = new Promise((resolve) => {
    getAdminById(idAdmin, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM admins WHERE id_admin='${idAdmin}'`;

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
            message: 'User admin berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'User admin gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addAdminHandler,
  getAllAdminsHandler,
  getAdminByIdHandler,
  getAdminByUsernamePasswordHandler,
  editAdminByIdHandler,
  deleteAdminByIdHandler,
};
