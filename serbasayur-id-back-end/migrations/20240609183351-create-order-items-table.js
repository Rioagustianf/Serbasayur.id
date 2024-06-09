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
  db.createTable('order_items', {
    id_order_item: { type: 'char', primaryKey: true, length: 255 },
    id_order: { type: 'char', length: 255 },
    id_produk: { type: 'char', length: 255 },
    kuantitas: { type: 'bigint' },
    harga_satuan: { type: 'bigint' },
  }, callback);
  db.addIndex('order_items', 'id_order_index', 'id_order', callback);
  db.addIndex('order_items', 'id_produk_index', 'id_produk', callback);
};

exports.down = function(db, callback) {
  db.removeIndex('order_items', 'id_order_index', callback);
  db.removeIndex('order_items', 'id_produk_index', callback);
  db.dropTable('order_items', callback);
};

exports._meta = {
  "version": 1
};
