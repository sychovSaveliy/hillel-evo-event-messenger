app.controller('main', function($scope, $flowDataUser, $transferService, $timeout){

  let _token = $transferService.getData('token') || sessionStorage.getItem('token');

  $scope.main = $scope.main || {};
  $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
    .then(response => {
      $scope.main.userData = response;
      $scope.main.eventsAll = response.events;
      $scope.main.userName = response.name;
      $scope.main.avatar = response.avatar;},
      error => $scope.errorMessage = error.info.message)
  $scope.getUserDataById({token: _token});
  $scope.main.settings = $scope.main.settings || {};
  $scope.main.searchEvents = $scope.main.searchEvents || {};
  $timeout(function(){
    $scope.main.eventSideBar = document.querySelector('.right-sidebar');
    $scope.main.content = document.querySelector('.content');
  })
});
