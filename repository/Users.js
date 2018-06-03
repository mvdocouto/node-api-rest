const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_api');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const usersSchema = new Schema({
    identifier: ObjectId,
    name: String,
    login: String,
    password: String
});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;
