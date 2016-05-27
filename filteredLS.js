var fs = require('fs');

var path = require('path');

var test = '.' + process.argv[3];

var fileNameAndPath = process.argv[2];

fs.readdir(fileNameAndPath, function(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === test) {
      console.log(list[i]);
    }

  }
})