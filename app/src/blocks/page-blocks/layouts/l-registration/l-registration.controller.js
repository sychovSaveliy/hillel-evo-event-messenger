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

  let regExp =/([^@\s\]\\,\\;\\:\\%\\~\\`\\!\\?\\<\\>\\$\\#\\^\\&\\*\\(\\)\\/\\+\\"\\'\\=])$/;

  let getKeyboardEventResult = function (id) {
    $scope.checkedItem = angular.element(document.querySelector("#"+id));
    if (!regExp.test($scope.checkedItem.val())) {
      $scope.checkedItem.val($scope.checkedItem.val().substr(0, $scope.checkedItem.val().length - 1));
    }
  };
  $scope.onKeyUp = function (id) {
     getKeyboardEventResult(id);
  };

});
