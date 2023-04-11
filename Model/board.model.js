const mongoose = require("mongoose");

const BoardSchema = mongoose.Schema({
  email: String,
  password: String,
});

const BoardModel = mongoose.model("board", BoardSchema);

module.exports = { BoardModel };