const processor = require("./processors/processor");

module.exports.validator = function (req, context, done) {
  // TODO: Implementar validação dos campos
  var validation = [];

  done(validation);
};

module.exports.controller = function (req, context, callback) {
  processor.executa({ id_pessoa: req.params.id_pessoa }, context, function (err, data) {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};