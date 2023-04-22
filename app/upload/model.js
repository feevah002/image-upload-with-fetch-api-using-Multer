const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports =  mongoose.model('Upload', UploadSchema)
