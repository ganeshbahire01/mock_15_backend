const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://ganesh:ganesh@cluster0.6d4ur0f.mongodb.net/mock15?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
