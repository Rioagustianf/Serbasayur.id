const { nanoid } = require('nanoid');
const db = require('../db_config');

async function getAllUsers(callback) {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getUserById(idUser, callback) {
  const sql = `SELECT * FROM users WHERE id_user='${idUser}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getUserByUsernamePassword(username, password, callback) {
  const sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addUserHandler = (request, h) => {
  const {
    username, email, password, nomor_telepon: nomorTelepon, alamat,
  } = request.payload;

  const idUser = `user-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO users(id_user, username, email, password, nomor_telepon, alamat) VALUES ('${idUser}','${username}','${email}','${password}','${nomorTelepon}','${alamat}')`;

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
        message: 'User berhasil ditambahkan',
        data: {
          id_user: idUser,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllUsersHandler = () => {
  const promise = new Promise((resolve) => {
    getAllUsers((results) => {
      const usersList = [];
      Object.keys(results).forEach((v) => {
        usersList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          users: usersList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getUserByIdHandler = (request, h) => {
  const { idUser } = request.params;

  const promise = new Promise((resolve) => {
    getUserById(idUser, (results) => {
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
          message: 'User tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const getUserByUsernamePasswordHandler = (request, h) => {
  const { username, password } = request.payload;

  const promise = new Promise((resolve) => {
    getUserByUsernamePassword(username, password, (results) => {
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

const editUserByIdHandler = (request, h) => {
  const { idUser } = request.params;

  const {
    username, email, password, nomor_telepon: nomorTelepon, alamat,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getUserById(idUser, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE users SET username='${username}',email='${email}',password='${password}',nomor_telepon='${nomorTelepon}',alamat='${alamat}' WHERE id_user='${idUser}'`;

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
            message: 'User berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui user. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteUserByIdHandler = (request, h) => {
  const { idUser } = request.params;

  const promise = new Promise((resolve) => {
    getUserById(idUser, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM users WHERE id_user='${idUser}'`;

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
            message: 'User berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'User gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  getUserByUsernamePasswordHandler,
  editUserByIdHandler,
  deleteUserByIdHandler,
};
