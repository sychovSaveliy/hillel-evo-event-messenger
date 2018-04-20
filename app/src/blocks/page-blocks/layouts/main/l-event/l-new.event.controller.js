app.controller('l-new.event', function($scope, $postNewEvent, $state, $transferService){
  let ctrl = this,
    guests = [];
    $scope.dateVote = angular.element(document.querySelector('#dateVote'));
    $scope.placeVote = angular.element(document.querySelector('#placeVote'));
    $scope.nameList = angular.element(document.querySelector('#nameList'));
    $scope.addPpl = angular.element(document.querySelector('#addPpl'));
    $scope.showVar = angular.element(document.querySelector('#showVar'));
    $scope.dateList = angular.element(document.querySelector('#dateList'));


  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.newEvent = {};
    $scope.checkboxDiv = false;
    $scope.$watch('main.dataUser', function(newValue) {
      if (!$scope.main.dataUser) {
        return;
      }
      $scope.main.dataUser = newValue;
    });
  }

  $scope.selectDates = [
    {
      text: 'Exact date',
      id: 'ED1',
      showInpId: 'exDate',
      typeInp: 'date'
    },
    {
      text: 'Exact date with time',
      id: 'ED2',
      showInpId: 'exDateTime',
      typeInp: 'datetime-local'
    },
    {
      text: 'Diapason of dates',
      id: 'ED3',
      showInpId: 'exDateDiap',
      typeInp: 'date'
    },
    {
      text: 'Diapason of dates with times',
      id: 'ED4',
      showInpId: 'exDateDiapTime',
      typeInp: 'datetime-local'
    }
  ];


  $scope.openVarList = function () {
    $scope.showVar.toggleClass('non-vis');
    $scope.dateList.toggleClass('non-vis');
  };

  $scope.chooseDateType = function (id) {
    $scope.choosed = angular.element(document.querySelector('#'+ id)).toggleClass('non-vis');
    let allVars = document.querySelectorAll('.varlist');
    for (let i=0; i < allVars.length; i++){
      if (allVars[i].id !== id){
        allVars[i].classList.add('non-vis')
      }
    }

    $scope.showVar.toggleClass('non-vis');
    $scope.dateList.toggleClass('non-vis');
  };
  $scope.addDateVote = function () {
    $scope.dateVote.toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
  };
  $scope.addPlaceVote = function () {
    $scope.placeVote.toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
  };
  $scope.openList = function () {
    $scope.nameList.toggleClass('non-vis');
    $scope.addPpl.toggleClass("fa-plus").toggleClass("fa-minus");
  };
  $scope.closeList = function () {
    $scope.nameList.toggleClass('non-vis');
    $scope.addPpl.toggleClass("fa-plus").toggleClass("fa-minus");
  };
  $scope.guestsList = function () {
    let allInp = document.querySelectorAll('.names');
    let newGusts = [];
    for (let i=0; i<allInp.length;i++){
      if(allInp[i].checked){
        var invited = {
          "name": allInp[i].value,
          "id": allInp[i].id,
          "role": "user",
          "chat_success": false
        };
        newGusts.push(invited);
      }
    }
    guests = newGusts;
    $scope.nameList.toggleClass('non-vis');
    $scope.addPpl.toggleClass("fa-plus").toggleClass("fa-minus");
  };

  $scope.formatedDate = function (setDate) {
    var confdate;
    if(!setDate){
      confdate = '';
      return confdate;
    }
    var dd = setDate.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = setDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yyyy = setDate.getFullYear();

    var hh = setDate.getHours();
    if (hh < 10) hh = '0' + hh;
    var min =  setDate.getMinutes();
    if (min < 10) min = '0' + min;

    confdate = dd + '.' + mm + '.' + yyyy + ', time: '+ hh + ':' + min;

    return confdate;
  };

  function checkBeforeSend(mess) {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("btn-close")[0];
    $scope.errorMessage = mess;
    modal.style.display = "block";
    $scope.closePopup = function() {
      modal.style.display = "none";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
   let messCheckContacts = 'You did not select anyone to send the invitation. Select and save guests from the "Participations" list or save the event to drafts.',
     messCheckDate = 'You did not set any date and time. Choose the date in "date" field or save the event as draft.',
     messCheckPlace = 'You did not set any place. Choose the date in "Place" field or save the event as draft.';

  $scope.sendNewEvent = function(params){
    if(guests.length <= 0){
      checkBeforeSend(messCheckContacts);
    } else if(!$scope.formatedDate(params.date)){
      checkBeforeSend(messCheckDate);
    } else if(params.place === undefined){
      checkBeforeSend(messCheckPlace);
    } else if (($scope.formatedDate(params.date)) || (guests.length > 0)){
      var paramsSend = {
        "id": "new_event",
        "name": params.name,
        "status": true,
        "date": [
          {
            "drafts": [
              {
                "date": '',
                "votes": 0
              }
            ],
            "confirmed": $scope.formatedDate(params.date)
          }
        ],
        "place": [
          {
            "drafts": [
              {
                "place": '',
                "votes": 0
              }
            ],
            "confirmed": params.place
          }
        ],
        "members": [
            {
            "invited": guests,
            "confirmed": [
              {
                "id": $scope.main.dataUser.id,
                "name": $scope.main.dataUser.name,
                "role": "admin",
                "chat_success": true
              }
            ]
          }
        ],
        "additional": params.additional
      };
      $postNewEvent.newEvent(paramsSend)
        .then(response => {
            $state.go('main');
          },
          error => $scope.errorMessage = error.info.message);
    }
  };

  //POST save draft
  $scope.saveEvent = function(params){

    var paramsSend = {
      "id": "new_event",
      "name": params.name,
      "status": false,
      "date": [
        {
          "drafts": [
            {
              "date": '',
              "votes": 0
            }
          ],
          "confirmed": $scope.formatedDate(params.date)
        }
      ],
      "place": [
        {
          "drafts": [
            {
              "place": '',
              "votes": 0
            }
          ],
          "confirmed": params.place
        }
      ],
      "members": [
          {
          "invited": guests,
          "confirmed": [
            {
              "id": $scope.main.dataUser.id,
              "name": $scope.main.dataUser.name,
              "role": "admin",
              "chat_success": true
            }
          ]
        }
      ]
    };
    $postNewEvent.newEvent(paramsSend)
      .then(response => {
          $state.go('main');
        },
        error => $scope.errorMessage = error.info.message);
  };

  $scope.cancel = function () {
    $state.go('main');
  }
});
