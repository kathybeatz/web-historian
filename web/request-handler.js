var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs')

exports.handleRequest = function (request, response) {

  if(request.method === "GET"){
    if(request.url === "/"){
      
      response.writeHead(200);

      fs.readFile(archive.paths.siteAssets + "/index.html", function (err, html) {
    if (err) {
      throw err; 
    } else{
      response.end(html);
    }
      });
    
     }//if(request.url === "/" + ){
    //   response.writeHead(200);
    //   //some kind of fs.method(err)
    // }
  }
}
  


};
// response.end(archive.paths.list);
