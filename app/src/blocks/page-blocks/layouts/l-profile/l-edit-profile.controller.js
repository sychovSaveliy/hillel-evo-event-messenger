app.controller('l-edit-profile', function($scope, $state, $flowDataUser, $transferService, $flowDataProfile){

  var ctrl = this;

  ctrl.$onInit = _onInit;
  $scope.profile = $scope.profile || {};
  function _onInit() {
    let _token = sessionStorage.getItem('token');
    $scope.readonlyremove = function (id1, id2, id3) {
      var makeEditable = document.getElementById(id1).removeAttribute('readonly');
      var invisbtnedit = document.getElementById(id2).classList.toggle('non-vis');
      var invisbtncnsl = document.getElementById(id3).classList.toggle('non-vis');
    };
    $scope.readonlyset = function (id1, id2, id3) {
      var makenotedit = document.getElementById(id1).readOnly = true;
      var invisbtnedit = document.getElementById(id2).classList.toggle('non-vis');
      var invisbtncnsl = document.getElementById(id3).classList.toggle('non-vis');
    };
    $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
      .then(response => {
          $scope.profile.userData = response;
          $scope.profile.eventsAll = response.events;
          $scope.profile.userName = response.username;
          $scope.profile.avatar = response.avatar;
          $scope.profile.token = response.token;
          $scope.profile.email = response.email;
          if(response.name !==''){
            $scope.profile.nickName = response.name;
          }else {
            var makeEditable = document.getElementById('nickName').removeAttribute('readonly');
            var invisbtnedit = document.getElementById('nickBtn').classList.toggle('non-vis');
          }
        },
        error => $scope.errorMessage = error.info.message);
    $scope.getUserDataById({token: _token});

    $scope.cancelEdit = function () {
      $state.go('main');
    }

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
