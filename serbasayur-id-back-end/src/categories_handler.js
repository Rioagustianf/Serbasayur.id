const { nanoid } = require('nanoid');
const db = require('./db_config');

async function getAllCategories(callback) {
  const sql = 'SELECT * FROM categories';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getCategoryById(idKategori, callback) {
  const sql = `SELECT * FROM categories WHERE id_kategori='${idKategori}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addCategoryHandler = (request, h) => {
  const {
    nama_kategori: namaKategori,
  } = request.payload;

  const idKategori = `category-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO categories(id_kategori, nama_kategori) VALUES ('${idKategori}','${namaKategori}')`;

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
        message: 'Kategori berhasil ditambahkan',
        data: {
          id_kategori: idKategori,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllCategoriesHandler = () => {
  const promise = new Promise((resolve) => {
    getAllCategories((results) => {
      const categoriesList = [];
      Object.keys(results).forEach((v) => {
        categoriesList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          categories: categoriesList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getCategoryByIdHandler = (request, h) => {
  const { idKategori } = request.params;

  const promise = new Promise((resolve) => {
    getCategoryById(idKategori, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            category: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Kategori tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editCategoryByIdHandler = (request, h) => {
  const { idKategori } = request.params;

  const {
    nama_kategori: namaKategori,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getCategoryById(idKategori, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE categories SET nama_kategori='${namaKategori}' WHERE id_kategori='${idKategori}'`;

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
            message: 'Kategori berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui kategori. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteCategoryByIdHandler = (request, h) => {
  const { idKategori } = request.params;

  const promise = new Promise((resolve) => {
    getCategoryById(idKategori, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM categories WHERE id_kategori='${idKategori}'`;

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
            message: 'Kategori berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Kategori gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addCategoryHandler,
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  editCategoryByIdHandler,
  deleteCategoryByIdHandler,
};
