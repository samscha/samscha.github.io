const { multiparty } = require('./');

/**
 * parsing with multiparty results in an Object:
 * {
 *   "fields":
 *   {
 *      title": // this should be req.body.title
 *      [
 *        "project-title-here"
 *      ],
 *      "subtitle": // this should be req.body.subtitle
 *      [
 *         "subtitle-here"
 *      ]
 *   },
 *   "files":
 *   {
 *      <<< files handled later >>>
 *   }
 * }
 *
 * also set res.locals.files for use later on (no need to re-parse request)
 *
 * @param {Object} req - request (unparsed)
 */
exports.multipartForm = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    const form = new multiparty.Form();

    return form.parse(req, (error, fields, files) => {
      if (error) return { err: true, error };

      const body = {};

      Object.keys(fields).forEach(key => (body[key] = fields[key][0]));

      req.body = body;

      res.locals.files = files;

      next();
    });
  }

  next();
};
