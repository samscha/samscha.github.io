exports.error = err => {
  if (process.env.NODE_ENV === 'development') console.log(err);
};
