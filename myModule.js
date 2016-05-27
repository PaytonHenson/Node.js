var fs = require('fs');

var path = require('path');

module.exports = function(fileName, ext, callback) {
  var test = '.' + ext;
  fs.readdir(fileName, function(err, list) {
    if (err) {
      return callback(err, null);
    }
    else {
      result = [];
      list.forEach(function(file) {
        if (path.extname(file) === test) {
          result.push(file);
        }
      })
    }
    callback(null, result);
  })
}