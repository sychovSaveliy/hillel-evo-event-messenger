app.controller('l-confirmation', function($scope, $state, $flowDataConfirm, $transferService){

  var ctrl = this;
  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.loginPage = {
      logotype: "app/img/main/logo_login_page.png"
    };
    let reqUserToken = window.location.href.toString();
    let getToken = reqUserToken.split("token=");
    for(let i=0;i<getToken.length; i++){
      var  _temp_token = getToken[1];
    }
    window.sessionStorage.setItem('token', _temp_token);

    $flowDataConfirm.requestConfirm({'token': _temp_token})
      .then(response => {
          if(response.access_token){
            console.log(response);
            window.sessionStorage.setItem('token', response.access_token);
            $state.go('profile');
          } else {
            $state.go('login');
          }
        },
        error => $scope.message = error);
  }
});
