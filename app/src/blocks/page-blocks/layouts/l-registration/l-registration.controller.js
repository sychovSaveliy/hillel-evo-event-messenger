app.controller('l-registration', function($scope, $state, $flowDataRegistr, $transferService){
  $scope.loginPage = {
    logotype: "app/img/main/logo_login_page.png"
  };
  let loginForm = document.getElementById('hide-form');
  $scope.setReg = params => $flowDataRegistr.requestRegistr(params)
    .then(response => {
        $scope.message = "Check your email " +response.email+ " for the confirmation";
        loginForm.classList.toggle('non-vis');
      },
      error => $scope.message = error);
});
