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
    .then((response) =>{
      let cont = [];
      // let events = [];
      let stop = 0;
      for (let i =0; i < response.user.contacts.length; i++){
        let name;
        let contacts = filereader(fs, './mock/api/users/'+ response.user.contacts[i] +'/user_pattern/get.json');
        contacts
          .then((response) =>{
            name = response.user.name;
            return name;
          })
          .then((name) =>{
            cont.push(name);
            stop = stop + 1;
            if(i === stop){
              response.user.contacts = cont;
              console.log(response.user);
              res.json(response.user);
            }
          })
      }

      // for (let j =0; j < response.user.events.length; j++){
      //   let event;
      //   let getEvents = filereader(fs, './mock/api/events/'+ response.user.events[j] +'/get.json');
      //   getEvents
      //     .then((response) =>{
      //       event = response.event;
      //       return event;
      //     })
      //     .then((event) =>{
      //       events.push(event);
      //       stop = stop + 1;
      //       if(j === stop){
      //         response.user.events = events;
      //         console.log(response);
      //         res.json(response);
      //       }
      //     })
      // }
    })
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




function getChatById(req, res) {
  var servicePromise = filereader(fs, './mock/api/events/'+ req.params.id +'/get.json');
  servicePromise
    .then((response) => {
      return response;
    })
    .then((response) => {
      res.json(response);
    });
}
