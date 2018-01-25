var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function getUser(req, res) {
  var servicePromise = filereader(fs, './mock/api/users/'+ req.params.id +'/user_pattern/get.json');

  servicePromise
    .then((response) => {
      return response.user;
    })
    .then((response) => {
      res.json(response);
    });
}

function getEventById(req, res) {
  var servicePromise = filereader(fs, './mock/api/events/'+ req.params.id +'/get.json');
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

module.exports = { getUser, postDataUserById, getEventById };
