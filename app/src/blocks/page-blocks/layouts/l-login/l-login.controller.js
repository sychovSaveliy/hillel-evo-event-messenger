app.controller('l-login', function($scope, $state){
    $scope.loginPage = {
      logotype: "app/img/main/logo_login_page.png"
    };
    $scope.goToTestPage = function () {
    $state.go('test');
  }
});
