app.controller('l-login', function($scope, $state, $flowDataAuth, $transferService){
    $scope.loginPage = {
      logotype: "app/img/main/logo_login_page.png"
    };

  $scope.setAuth = params => $flowDataAuth.requestAuth(params)
          .then(response => {$transferService.setData({name:'auth',data:params}); $state.go('main')}, error => $scope.errorMessage = error.info.message);

  $scope.goToTestPage = function () {
    $state.go('test');
  };
});
