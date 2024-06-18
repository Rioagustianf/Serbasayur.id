/* eslint-disable no-underscore-dangle */
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');
const db = require('../db_config');

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
    nama,
    id_kategori: idKategori,
    deskripsi,
    harga,
    image,
    kuantitas,
    rating,
  } = request.payload;

  const idProduk = `product-${nanoid(16)}`;

  const promise = new Promise((resolve) => {
    // eslint-disable-next-line prefer-destructuring
    const filename = `image-${nanoid(16)}.jpg`;
    const data = image._data;

    fs.writeFile(
      path.resolve(__dirname, `../image/${filename}`),
      data,
      (err) => {
        if (err) {
          const response = h.response({
            status: 'fail',
            message: err.message,
          });
          response.code(500);
          resolve(response);
        }
      },
    );

    const sql = `INSERT INTO products(id_produk, nama, id_kategori, deskripsi, harga, image, kuantitas, rating) VALUES ('${idProduk}','${nama}','${idKategori}','${deskripsi}',${harga},'${filename}',${kuantitas},${rating})`;

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
          id_produk: idProduk,
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
    nama,
    id_kategori: idKategori,
    deskripsi,
    harga,
    image,
    kuantitas,
    rating,
  } = request.payload;

  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
<<<<<<< HEAD
      if (typeof results !== "undefined" && results.length > 0) {
        const oldImage = results[0].image;

=======
      if (typeof results !== 'undefined' && results.length > 0) {
>>>>>>> 4a4363085a035c3b30dde41f6f2cb4d211d5d960
        let sql;
        let filename = oldImage; // Default to old image filename

<<<<<<< HEAD
        // Check if new image is uploaded
        if (image && image.hapi.filename !== "") {
          filename = `image-${nanoid(16)}.jpg`;
          const data = image._data;

          // Write new image file
          fs.writeFile(
            path.resolve(__dirname, `../image/${filename}`),
            data,
            (err) => {
=======
        if (typeof image !== 'undefined') {
          const oldImage = results[0].image;

          // eslint-disable-next-line prefer-destructuring
          const filename = `image-${nanoid(16)}.jpg`;
          const data = image._data;

          const checkOldFilename = image.hapi.filename;

          if (checkOldFilename !== '') {
            fs.writeFile(
              path.resolve(__dirname, `../image/${filename}`),
              data,
              (err) => {
                if (err) {
                  const response = h.response({
                    status: 'fail',
                    message: err.message,
                  });
                  response.code(500);
                  resolve(response);
                }
              },
            );

            fs.unlink(path.resolve(__dirname, `../image/${oldImage}`), (err) => {
>>>>>>> 4a4363085a035c3b30dde41f6f2cb4d211d5d960
              if (err) {
                const response = h.response({
                  status: 'fail',
                  message: err.message,
                });
                response.code(500);
                resolve(response);
              }
<<<<<<< HEAD
            }
          );

          // Delete old image file
          fs.unlink(path.resolve(__dirname, `../image/${oldImage}`), (err) => {
            if (err) {
              const response = h.response({
                status: "fail",
                message: err.message,
              });
              response.code(500);
              resolve(response);
            }
            console.log("Old file was deleted");
          });
        }

        // Construct SQL query based on whether image is updated or not
        if (image && image.hapi.filename !== "") {
          sql = `UPDATE products SET nama='${nama}',id_kategori='${idKategori}',deskripsi='${deskripsi}',harga=${harga},image='${filename}',kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;
=======
              console.log('file was deleted');
            });
            sql = `UPDATE products SET nama='${nama}',id_kategori='${idKategori}',deskripsi='${deskripsi}',harga=${harga},image='${filename}',kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;
          } else {
            sql = `UPDATE products SET nama='${nama}',id_kategori='${idKategori}',deskripsi='${deskripsi}',harga=${harga},kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;
          }
>>>>>>> 4a4363085a035c3b30dde41f6f2cb4d211d5d960
        } else {
          sql = `UPDATE products SET nama='${nama}',id_kategori='${idKategori}',deskripsi='${deskripsi}',harga=${harga},kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;
        }

        // Execute SQL query
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
        const oldImage = results[0].image;

        fs.unlink(path.resolve(__dirname, `../image/${oldImage}`), (err) => {
          if (err) {
            const response = h.response({
              status: 'fail',
              message: err.message,
            });
            response.code(500);
            resolve(response);
          }
        });

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
