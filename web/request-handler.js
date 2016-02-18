var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs')

exports.handleRequest = function (request, response) {

  if(request.method === "GET"){
    if(request.url === "/"){
  fs.readFile(archive.paths.siteAssets + "/index.html", function (err, html) {
    if (err) {
        throw err; 
    } else{
      response.end(html);
    }
  });
       
  }
}

      // response.end(archive.paths.list);
};

