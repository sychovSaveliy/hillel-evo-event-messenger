app.controller('main', function($scope, $flowDataUser, $transferService){

  let _token = $transferService.getData('token') || localStorage.getItem('token');

  $scope.main = $scope.main || {};
  $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
    .then(response => $scope.main.userData = response,
      error => $scope.errorMessage = error.info.message)
    .then((response)=> {
      $scope.main.eventsAll = response.events;
      $scope.main.userName = response.name;
      $scope.main.avatar = response.avatar;
    });
  $scope.getUserDataById({token: _token});
});
