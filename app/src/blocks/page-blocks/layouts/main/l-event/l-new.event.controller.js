app.controller('l-new.event', function($scope){
  let ctrl = this,
    dateVote = document.getElementById('dateVote'),
    placeVote = document.getElementById('placeVote'),
    nameList = document.getElementById('nameList'),
    addPpl = document.getElementById('addPpl'),
    guests = [];

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
  $scope.confirmList = function () {
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
});
