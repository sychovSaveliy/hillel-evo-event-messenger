app.controller('l-edit-profile', function($scope, $state, $flowDataUser, $transferService, $flowDataProfile){

  var ctrl = this;

  ctrl.$onInit = _onInit;
  $scope.profile = $scope.profile || {};
  function _onInit() {
    let _token = sessionStorage.getItem('token');
    $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
      .then(response => {
          $scope.profile.userData = response;
          $scope.profile.eventsAll = response.events;
          $scope.profile.userName = response.name;
          $scope.profile.avatar = response.avatar;
          $scope.profile.token = response.token;
        },
        error => $scope.errorMessage = error.info.message);
    $scope.getUserDataById({token: _token});


    $scope.setEditData = function (params) {
      $scope.sendProfile = params => $flowDataProfile.requestProfile(params)
        .then(response => {
            $transferService.setData({name:'profile',data:response});
            let data = response;
          },
          error => $scope.errorMessage = error.info.message);
      $scope.sendProfile();
      $state.go('main');
    }

  }



});
