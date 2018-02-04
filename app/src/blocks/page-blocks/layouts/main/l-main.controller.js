app.controller('main', function($scope, $flowDataUser, $transferService){

    let _token = $transferService.getData('token') || localStorage.getItem('token');

    $scope.main = $scope.main || {};
    $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
        .then(response => $scope.main.userData = response,
        error => $scope.errorMessage = error.info.message);
    $scope.getUserDataById({token: _token});
});
