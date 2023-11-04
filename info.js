module.exports.about = () => {
  return 'This app A';
};

module.exports.version = () => {
  return require('./version').version;
};
