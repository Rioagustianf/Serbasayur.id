/* eslint-disable no-new-wrappers */
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
  db.createTable('payments', {
    id_payment: { type: 'char', primaryKey: true, length: 255 },
    id_order: {
      type: 'char',
      length: 255,
      foreignKey: {
        name: 'payments_id_order',
        table: 'orders',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id_order'
      }
    },
    payment_date: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP'),
    },
    amount: { type: 'bigint' },
    payment_method: { type: 'char', length: 50 },
    payment_status: { type: 'char', length: 50 },
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('payments', true, callback);
};

exports._meta = {
  "version": 1
};
