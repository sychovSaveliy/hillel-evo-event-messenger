app.controller('l-login', function($scope, $state, $flowData){
    $scope.loginPage = {
      logotype: "app/img/main/logo_login_page.png"
    };
  $scope.setAuth = function (params) {
    $flowData.req(params)
      .then(function (response) {
        $state.go('test');
        },
        function (error) {
          $scope.errorMessage = error.info.message;
        })
  }
});