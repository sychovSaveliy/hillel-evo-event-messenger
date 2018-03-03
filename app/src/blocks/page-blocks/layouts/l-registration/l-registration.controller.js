app.controller('l-registration', function($scope, $state, $flowDataAuth, $transferService){
  $scope.loginPage = {
    logotype: "app/img/main/logo_login_page.png"
  };
  $scope.setReg = function (params) {
    if(params.password !== params.passwordConf){
      $scope.errorMessage = "You should to enter same password";
    } else {
      $scope.errorMessage = 'We sent you message, check your e-mail for the confirmation.';
    }
  };
});
