const Upload = require('./model')


exports.createUpload = async (payload) => {
  const data = await Upload.create(payload);
  return data;
};

exports.getUploads = async () => {
  const data = await Upload.find({});
  return data;
};