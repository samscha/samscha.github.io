const { s3, fileType, fs } = require('.');

exports.getPhoto = (req, res, next) => {
  const objectParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: 'Foodggregator',
  };

  s3.getObject(objectParams, (err, data) => {
    if (err) return res.status(500).send({ err });

    res.locals.bucket = data;

    next();
  });
};

/**
 * uploading to AWS S3 adapted from
 *
 * https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd
 *
 */
exports.photo = async (req, res, next) => {
  const _uploadFile = (buffer, name, type) => {
    const params = {
      Body: buffer,
      Bucket: process.env.AWS_BUCKET,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`,
    };

    return s3.upload(params).promise();
  };

  const files = res.locals.files;
  const originalFilename = files.file[0].originalFilename;
  const timestamp = Date.now().toString();
  const title = req.body.title;

  try {
    const path = files.file[0].path;
    const buffer = fs.readFileSync(path);
    const type = fileType(buffer);
    const fileName = `${title}/${timestamp}-${originalFilename}-proj-tbn`;
    const data = await _uploadFile(buffer, fileName, type);

    res.locals.newProject = {
      ...res.locals.newProject,
      thumbnail: data.Key,
    };

    next();
  } catch (error) {
    return res.status(400).send({ error, message: `error uploading to s3` });
  }
};
