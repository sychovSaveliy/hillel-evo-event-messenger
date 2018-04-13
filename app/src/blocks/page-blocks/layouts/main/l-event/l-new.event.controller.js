app.controller('l-new.event', function($scope, $postNewEvent, $transferService){
  let ctrl = this,
    dateVote = document.getElementById('dateVote'),
    placeVote = document.getElementById('placeVote'),
    nameList = document.getElementById('nameList'),
    addPpl = document.getElementById('addPpl'),
    guests = [];
  let date = new Date();

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.newEvent = {};
    $scope.checkboxDiv = false;
  }
  $scope.addDateVote = function () {
    dateVote.classList.toggle('fa-toggle-off');
    dateVote.classList.toggle('fa-toggle-on');
  };
  $scope.addPlaceVote = function () {
    placeVote.classList.toggle('fa-toggle-off');
    placeVote.classList.toggle('fa-toggle-on');
  };
  $scope.openList = function () {
    nameList.classList.toggle('non-vis');
    addPpl.classList.toggle("fa-plus");
    addPpl.classList.toggle("fa-minus");
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
    nameList.classList.add('non-vis');
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
    nameList.classList.add('non-vis');
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
        },
        error => $scope.errorMessage = error.info.message);
  }
});
