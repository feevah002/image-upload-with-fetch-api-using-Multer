const { createUpload, getUploads } = require("./repository");

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get upload form
 * @route `/upload-form/`
 * @access Public
 * @type GET
 */
exports.formGetCtrl = async (req, res) => {
  res.render("uploadForm");
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description post data
 * @route `/upload-data/`
 * @access Public
 * @type GET
 */
exports.formPostCtrl = async (req, res) => {
  let image ='';
  if(req.file){
    image = req.file.path;
  }
  const text = req.body.text;
  const data = await createUpload({
    image,
    text,
  });

  return res.status(200).json({
    data,
  });
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get data page
 * @route `/get-data-page/`
 * @access Public
 * @type GET
 */
exports.getUploadPage = async (req, res) => {
  res.render("dataPage");
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get data API
 * @route `/get-data/`
 * @access Public
 * @type GET
 */
exports.getUploadData = async (req, res) => {
  const data = await getUploads();
  return res.status(200).json({
    data,
  });
};
