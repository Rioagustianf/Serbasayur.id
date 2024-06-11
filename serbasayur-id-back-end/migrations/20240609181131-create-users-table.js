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
  db.createTable('users', {
    id_user: { type: 'char', primaryKey: true, length: 255 },
    username: { type: 'char', length: 255 },
    email: { type: 'char', length: 255 },
    password: { type: 'char', length: 255 },
    nomor_telepon: { type: 'char', length: 255 },
    alamat: { type: 'text' },
  }, callback);
};

exports.down = function(db, callback) {
  // db.removeForeignKey('orders', 'orders_id_user', callback);
  db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
