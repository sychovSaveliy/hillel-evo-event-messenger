var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function getUserById(req, res) {
  console.log(req);
  var servicePromise = filereader(fs, './mock/api/users/'+ req.params.id +'/user_pattern.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function getEventById(req, res) {
  console.log(req);
  var servicePromise = filereader(fs, './mock/api/events/'+ req.params.id +'/event.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function postDataUserById(req, res) {
  var servicePromise;

  servicePromise = filereader(fs, './mock/api/users/' + req.body.login +'/post.json');
  servicePromise
    .then((response) => {
      res.json(response);
    });
}

module.exports = { getUserById, postDataUserById, getEventById };
