const mongoose = require('mongoose');
const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/listDB");;
exports.mongoose = mongoose;
exports.conn = conn;