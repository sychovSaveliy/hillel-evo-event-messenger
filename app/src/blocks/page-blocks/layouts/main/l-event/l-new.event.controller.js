app.controller('l-new.event', function($scope, $postNewEvent, $state, $transferService){
  let ctrl = this,
    guests = [];
    $scope.dateVote = angular.element(document.querySelector('#dateVote'));
    $scope.placeVote = angular.element(document.querySelector('#placeVote'));
    $scope.nameList = angular.element(document.querySelector('#nameList'));
    $scope.addPpl = angular.element(document.querySelector('#addPpl'));

  let date = new Date();

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.newEvent = {};
    $scope.checkboxDiv = false;
  }
  $scope.addDateVote = function () {
    $scope.dateVote.toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
  };
  $scope.addPlaceVote = function () {
    $scope.placeVote.toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
  };
  $scope.openList = function () {
    $scope.nameList.toggleClass('non-vis');
    $scope.addPpl.toggleClass("fa-plus").toggleClass("fa-minus");
    let allInp = document.querySelectorAll('.names');
    let newGusts = [];
    for (let i=0; i<allInp.length;i++){
      if(allInp[i].checked){
        newGusts.push(allInp[i].id);
      }
    }
    guests = newGusts;
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
        newGusts.push(allInp[i].id);
      }
    }
    guests = newGusts;
    $scope.nameList.toggleClass('non-vis');
  };
  $scope.setDate = function (value) {
    date.getMilliseconds(value);
    return date;
  };
  //POST
  $scope.sendNewEvent = function(params){
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
          "confirmed": date
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
      "members": guests,
    };

    $postNewEvent.newEvent(paramsSend)
      .then(response => {
          console.log(response);
          $state.go('main');
        },
        error => $scope.errorMessage = error.info.message);
  };
  $scope.cancel = function () {
    $state.go('main');
  }
});
