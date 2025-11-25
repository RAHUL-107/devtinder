const mongoose = require('mongoose');

const connectdb = async  ()=>{
  await mongoose.connect('mongodb+srv://093rahulrajput_db_user:AYGzpHJLrjH8nO7B@namastenode.53zmzjg.mongodb.net/devTinder');
};

module.exports = connectdb;




