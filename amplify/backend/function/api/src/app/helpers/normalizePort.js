module.exports = () => {
  const port = parseInt(process.env.PORT || 7777, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
};
