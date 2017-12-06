var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function testGetRequest(req, res) {
    var servicePromise = filereader(fs, './api/test/get.json');

    servicePromise
        .then((response) => {
            console.log("GET", './api/test/get.json');
            // response
            return response;
        }, (error) => {
            console.log("GET - ERROR", './api/test/get.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function testPostRequest(req, res) {
    var servicePromise = filereader(fs, './mock/api/test/post.json');

    servicePromise
        .then((response) => {
            console.log("POST", './mock/api/test/post.json');
            return response;
        }, (error) => {
            console.log("POST - ERROR", './mock/api/test/post.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}


function getMenu(req, res) {
    var path = './api/menu/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
            console.log("GET", path);
            return response;
        }, (error) => {
                console.log("GET - ERROR", path, error);
            })
        .then((response) => {
            res.json(response);
        });
}

function onError(error) {
    console.error(error);
}

function getUserById(req, res) {
  var servicePromise = filereader(fs, './mock/api/collections/users/id_'+ req.params.id +'/get.json');
  servicePromise
    .then((response) => {
    console.log(response);
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function postDataUserById(req, res) {
  var servicePromise = filereader(fs, './mock/api/collections/users/id_'+ req.params.id +'/post.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function getEventsChatsById(req, res) {
  var servicePromise = filereader(fs, './mock/api/collections/chats/id_'+ req.params.id +'/get.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

module.exports = { testGetRequest, testPostRequest, getMenu, getUserById, getEventsChatsById, postDataUserById };
