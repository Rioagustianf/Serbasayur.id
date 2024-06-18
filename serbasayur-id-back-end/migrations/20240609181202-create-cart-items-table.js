/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable strict */

'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('cart_items', {
    id_cart_item: { type: 'char', primaryKey: true, length: 255 },
    id_cart: {
      type: 'char',
      length: 255,
      foreignKey: {
        name: 'cart_items_id_cart',
        table: 'carts',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_cart'
      }
    },
    id_produk: {
      type: 'char',
      length: 255,
      foreignKey: {
        name: 'cart_items_id_produk',
        table: 'products',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_produk'
      }
    },
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('cart_items', true, callback);
};

exports._meta = {
  "version": 1
};
