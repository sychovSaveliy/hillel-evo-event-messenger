app.controller('main', function($scope, $flowDataUser, $transferService, $window){
    let tokenKey;
    let _token = $transferService.getData('auth') ||
    {[$window.localStorage.getItem('tokenKey')]: $window.localStorage.getItem('token')};

    for (let key in _token) {
        tokenKey = key
    }
    $scope.main = $scope.main || {};

    $window.localStorage.setItem('tokenKey', tokenKey)
    $window.localStorage.setItem('token', _token[tokenKey]);
    $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
        .then(response => $scope.contactsArray = response,
        error => $scope.errorMessage = error.info.message);
    $scope.getUserDataById({token: _token[tokenKey]});
});
