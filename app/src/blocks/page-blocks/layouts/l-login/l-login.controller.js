app.controller('l-login', function($scope, $state, $flowDataAuth, $transferService){
    $scope.loginPage = {
      logotype: "app/img/main/logo_login_page.png"
    };

  $scope.setAuth = params => {
    $flowDataAuth.requestAuth(params)
          .then(response => {
            let _token = response;
            $transferService.setData({name:'signin',data:response});
            $transferService.setData({name: 'token', data:_token});
              sessionStorage.setItem('token', _token);
              $state.go('main');
            },
            error => $scope.errorMessage = error.message);
  };

  $scope.goToTestPage = function () {
    $state.go('test');
  };
  $scope.goToRegistration = function () {
    $state.go('registration');
  };
});
