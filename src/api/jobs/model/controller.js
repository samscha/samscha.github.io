const Job = require('./index');

exports.create = (req, res, next) => {
  new Job(res.locals.sanitizedJob).save((err, newJob) => {
    if (err) return res.status(500).send({ err, message: `error saving job` });

    res.locals.newJob = newJob;
    next();
  });
};

/**
 * this middleware should ONLY be used with routes ending with `/:id`
 * to avoid `id` ever being `undefined`
 *
 */
exports.retrieve = (req, res, next) => {
  const id = req.params.id;

  Job.findById(id, (err, job) => {
    if (err)
      return res
        .status(500)
        .send({ err, message: `error retrieving id ${id}` });

    if (!job)
      return res.status(422).send({ message: `job with id ${id} not found` });

    res.locals.job = job;
    next();
  });
};

/**
 * this middleware should ONLY be used with routes ending with `/:id`
 * to avoid `id` ever being `undefined`
 *
 */
exports.update = (req, res, next) => {
  const id = req.params.id;

  Job.findByIdAndUpdate(
    id,
    {}, // finish this
    (err,
    updatedJob => {
      if (err)
        return res.status(500).send({ err, message: `error updating job` });

      res.locals.updatedJob = updatedJob;
      next();
    }),
  );
};

/**
 * this middleware should ONLY be used with routes ending with `/:id`
 * to avoid `id` ever being `undefined`
 *
 */
exports.delete = (req, res, next) => {
  const _id = req.params.id;

  Job.findOne({ _id }, (err, job) => {
    if (err)
      return res
        .status(500)
        .send({ err, message: `error finding job with id: ${_id}` });

    if (!job)
      return res.status(422).send({ message: `job with id not found: ${_id}` });

    job.remove(_ => next());
  });
};
