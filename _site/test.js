let fs = require('fs');
let html5lint = require('html5-lint');

let files = [
    'index.html',
    'users.html',
    'users/user1.html',
    'users/user2.html',
    'users/user3.html'
]

for (let i = 0; i < files.length; i++) {
    fs.readFile(files[i], 'utf8', function( err, html ) {
      if (err) {
        throw err;
      }
      html5lint(html, function(err, results) {
        results.messages.forEach(function(msg) {
          let type = msg.type, // error or warning 
          message = msg.message;
          console.log("HTML5 Lint [%s]: %s", type, message);
        });
      });
      console.log('file ' + files[i] + ' checked!');
    });
  }