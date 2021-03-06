"use-strict";

import multer from "multer";
import path from "path";

//* Middleware for control the image

//* Set the upload destination and filename
let dest = multer.diskStorage({
  //~ Set destination
  destination: function (req, file, cb) {
    cb(null, "./src/client/private/static");
  },
  //~ Set filename
  filename: function (req, file, cb) {
    cb(null, `${req.body.name}.${file.mimetype.split('/')[1]}`);
  },
});

//* Control extension and mimetype
function checkTypes(file, cb) {
  const filetype = /svg|jpeg|jpg|png/;
  let extname = filetype.test(path.extname(file.originalname));
  let mimetype = filetype.test(file.mimetype);

  if (extname && mimetype) return cb(null, true);
  else return cb("Wrong format, please change !", false);
}

//* Set the middleware with the options
let uploadSingleImage = multer({
  storage: dest,
  limits: { fileSize: 100000 },
  fileFilter: function (req, file, cb) {
    checkTypes(file, cb);
  },
}).single("image");

//* Send the response to the client
export default function upload(req, res, next) {
  uploadSingleImage(req, res, function (err) {

    if (err) res.status(404).send({ result: err, error: true });
    else {
      if (req.file == undefined)
        res.status(400).send({ result: "Please select an image", error: true });
      else next();
    }
  });
}
