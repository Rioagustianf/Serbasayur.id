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
  db.createTable('categories', {
    id_kategori: { type: 'char', primaryKey: true, length: 255 },
    nama_kategori: { type: 'char', length: 255 },
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('categories', callback);
};

exports._meta = {
  "version": 1
};
