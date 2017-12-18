app.controller('l-test-buttons', function($scope, $state){
  $scope.goToLoinPage = function () {
    $state.go('login');
  }
});
