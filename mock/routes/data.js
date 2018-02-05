let fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function getUser(req, res) {
  let servicePromise = filereader(fs, './mock/api/users/'+ req.params.id +'/user_pattern/get.json');

  servicePromise
    .then((response) =>{
      let contactsArr = [],
          oneUser = {},
          stop = 0,
          length = response.user.contacts.length,
          data = response;
      for (let i =0; i < length; i++){
        let key = response.user.contacts[i].id;
        let newarr = filereader(fs, './mock/api/users/'+ key +'/user_pattern/get.json');
            newarr
              .then((response) =>{
                oneUser = {
                  "name": response.user.name,
                  "id": response.user.id
                };
                contactsArr.push(oneUser);
                stop = stop + 1;
                if(length === stop){
                  data.user.contacts = contactsArr;
                  return res.json(data.user);
                }
                return contactsArr;
              })
      }
    })
}

function getEventById(req, res) {
  let servicePromise = filereader(fs, './mock/api/events/'+ req.params.id +'/get.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function getChatById(req, res) {
  let servicePromise = filereader(fs, './mock/api/chats/'+ req.params.id +'/get.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}

function postDataUserById(req, res) {
  let servicePromise;

  servicePromise = filereader(fs, './mock/api/users/' + req.body.login +'/post.json');
  servicePromise
    .then((response) => {
      res.json(response);
    });
}

module.exports = { getUser, postDataUserById, getEventById, getChatById };
