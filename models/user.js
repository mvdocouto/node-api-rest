const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: String,
    login: String,
    password: String
},{
    timestamps: true
});
module.exports = mongoose.model('Users', UsersSchema);
