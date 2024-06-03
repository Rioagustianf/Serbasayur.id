const { nanoid } = require('nanoid');
<<<<<<< HEAD
const products = require('./products');
=======
>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
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

<<<<<<< HEAD
=======
async function getProductById(idProduk, callback) {
  const sql = `SELECT * FROM products WHERE id_produk='${idProduk}'`;

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    return callback(Object.values(JSON.parse(JSON.stringify(results))));
  });
}

>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
const addProductHandler = (request, h) => {
  const {
    nama, deskripsi, harga, image, kuantitas, rating,
  } = request.payload;

  const idProduk = `product-${nanoid(16)}`;

  try {
    const sql = `INSERT INTO products(id_produk, nama, deskripsi, harga, image, kuantitas, rating) VALUES ('${idProduk}','${nama}','${deskripsi}',${harga},'${image}',${kuantitas},${rating})`;

    db.query(sql);

    const response = h.response({
      status: 'success',
      message: 'Berhasil',
      data: {
        idProduk,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: error,
    });
    response.code(500);
    return response;
  }
};

const getAllProductsHandler = async () => {
  const promise = new Promise((resolve) => {
    getAllProducts((results) => {
      const productList = [];
      Object.keys(results).forEach((v) => {
<<<<<<< HEAD
        console.log(results[v]);
=======
>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
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

<<<<<<< HEAD
  const product = products.filter((p) => p.idProduk === idProduk)[0];

  if (product !== undefined) {
    return {
      status: 'success',
      data: {
        product,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Produk tidak ditemukan',
  });
  response.code(404);
  return response;
=======
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
>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
};

const editProductByIdHandler = (request, h) => {
  const { idProduk } = request.params;

  const {
    nama, deskripsi, harga, image, kuantitas, rating,
  } = request.payload;

<<<<<<< HEAD
  const index = products.findIndex((product) => product.idProduk === idProduk);

  if (index !== -1) {
    products[index] = {
      ...products[index],
      nama,
      deskripsi,
      harga,
      image,
      kuantitas,
      rating,
    };

    const response = h.response({
      status: 'success',
      message: 'Produk berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui produk. Id tidak ditemukan',
  });
  response.code(404);
  return response;
=======
  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `UPDATE products SET nama='${nama}',deskripsi='${deskripsi}',harga=${harga},image='${image}',kuantitas=${kuantitas},rating=${rating} WHERE id_produk='${idProduk}'`;

        db.query(sql);

        const response = h.response({
          status: 'success',
          message: 'Produk berhasil diperbarui',
        });
        response.code(200);
        resolve(response);
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
>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
};

const deleteProductByIdHandler = (request, h) => {
  const { idProduk } = request.params;

<<<<<<< HEAD
  const index = products.findIndex((product) => product.idProduk === idProduk);

  if (index !== -1) {
    products.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Produk berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Produk gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
=======
  const promise = new Promise((resolve) => {
    getProductById(idProduk, (results) => {
      if (typeof results !== 'undefined' && results.length > 0) {
        const sql = `DELETE FROM products WHERE id_produk='${idProduk}'`;

        db.query(sql);

        const response = h.response({
          status: 'success',
          message: 'Produk berhasil dihapus',
        });
        response.code(200);
        resolve(response);
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
>>>>>>> 00df711cb10dbb5be265c9b85616debf4c9a82e3
};

module.exports = {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
};
