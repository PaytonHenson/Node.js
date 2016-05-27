var myModule = require('./myModule.js');

var fileName = process.argv[2];

var extension = process.argv[3];

myModule(fileName, extension, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});