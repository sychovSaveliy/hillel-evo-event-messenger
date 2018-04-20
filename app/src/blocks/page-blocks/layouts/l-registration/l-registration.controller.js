app.controller('l-registration', function($scope, $state, $flowDataRegistr, $transferService){
  $scope.loginPage = {
    logotype: "app/img/main/logo_login_page.png"
  };
  $scope.setReg = params => $flowDataRegistr.requestRegistr(params)
    .then(response => {
        // $transferService.setData({name:'auth',data:response});
        // $transferService.setData({name: 'token', data:_token});
        // sessionStorage.setItem('token', _token);
        // $state.go('main');
      },
      error => $scope.errorMessage = error);
  // $scope.setReg = function (params) {
  //   if(params.password !== params.passwordConf){
  //     $scope.errorMessage = "You should to enter same password";
  //   } else {
  //     $scope.errorMessage = 'We sent you message, check your e-mail for the confirmation.';
  //   }
  // };
});
