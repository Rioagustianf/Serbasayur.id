const { nanoid } = require('nanoid');
const db = require('./db_config');

async function getAllProducts(callback) {
  const sql = 'SELECT * FROM products';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

async function getProductById(idProduk, callback) {
  const sql = `SELECT * FROM products WHERE id_produk='${idProduk}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

const addProductHandler = (request, h) => {
  const {
    nama, deskripsi, harga, image, kuantitas, rating,
  } = request.payload;

  const idProduk = `product-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    const sql = `INSERT INTO products(id_produk, nama, deskripsi, harga, image, kuantitas, rating) VALUES ('${idProduk}','${nama}','${deskripsi}',${harga},'${image}',${kuantitas},${rating})`;

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
        message: 'Berhasil',
        data: {
          idProduk,
        },
      });
      response.code(201);
      resolve(response);
    });
  });

  return promise;
};

const getAllProductsHandler = () => {
  const promise = new Promise((resolve) => {
    getAllProducts((results) => {
      const productList = [];
      Object.keys(results).forEach((v) => {
        productList.push(results[v]);
      });
      const response = {
        status: 'success',
        data: {
          products: productList,
        },
      };
      resolve(response);
    });
  });
  return promise;
};

const getProductByIdHandler = (request, h) => {
  const { idProduk } = request.params;

  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const response = {
          status: 'success',
          data: {
            product: results[0],
          },
        };
        resolve(response);
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Produk tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });
  return promise;
};

const editProductByIdHandler = (request, h) => {
  const { idProduk } = request.params;

  const {
    nama, deskripsi, harga, image, kuantitas, rating,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE products SET nama='${nama}',deskripsi='${deskripsi}',harga=${harga},image='${image}',kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;

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
            message: 'Produk berhasil diperbarui',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui produk. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

const deleteProductByIdHandler = (request, h) => {
  const { idProduk } = request.params;

  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM products WHERE id_produk='${idProduk}'`;

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
            message: 'Produk berhasil dihapus',
          });
          response.code(200);
          resolve(response);
        });
      } else {
        const response = h.response({
          status: 'fail',
          message: 'Produk gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        resolve(response);
      }
    });
  });

  return promise;
};

module.exports = {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
};
