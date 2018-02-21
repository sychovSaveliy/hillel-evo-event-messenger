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

      return new Promise(function(resolve, reject){
        let contactsArr = [],
          oneUser = {},
          stop = 0,
          length = response.user.contacts.length,
          data = response;
        for (let i =0; i < length; i++){
          let key = response.user.contacts[i].id;
          let private_chat = response.user.contacts[i].private_chat;
          let newUserContacts = filereader(fs, './mock/api/users/'+ key +'/user_pattern/get.json');
          newUserContacts
            .then((response) =>{
              oneUser = {
                "name": response.user.name,
                "id": response.user.id,
                "avatar": response.user.avatar,
                "private_chat": private_chat
              };
              contactsArr.push(oneUser);
              stop = stop + 1;
              if(length === stop){
                data.user.contacts = contactsArr;
                response = data;
                resolve(response);
              }
              return contactsArr;
            })
        }
      })

        .then((response) =>{
          return new Promise(function(resolve, reject){
              let eventsAll = {
              currentEvents: {
                title: "Current Events",
                data: []
              },
              draftEvents: {
                title: "Draft Events",
                data: []
              }
            },
              oneEvent = {},
              stop = 0,
              length = response.user.events.length,
              data = response;
            for (let i =0; i < length; i++){
              let key = response.user.events[i].id;
              let newUserEvents = filereader(fs, './mock/api/events/'+ key +'/get.json');
              newUserEvents
                .then((response) =>{
                if(response.event.status === true){
                  eventsAll.currentEvents.data.push(oneEvent = {
                    "name": response.event.name,
                    "id": response.event.id,
                    "status": response.event.status
                  })
                }
                if(response.event.status === false){
                  eventsAll.draftEvents.data.push(oneEvent = {
                    "name": response.event.name,
                    "id": response.event.id,
                    "status": response.event.status
                  })
                }
                  stop = stop + 1;
                  if(length === stop){
                    data.user.events = eventsAll;
                    response = data;
                    resolve(response);
                  }
                  return eventsAll;
                })
            }
          })
        })
        .then((response) => {
          res.json(response.user);
        });

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
