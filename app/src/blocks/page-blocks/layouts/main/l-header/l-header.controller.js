app.controller('l-header.controller', function($scope, $state){
  var ctrl = this;

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.header = {};
    $scope.main.header.date = new Date();

  }
  $scope.openProfile = function () {
    $state.go('profile');
  }
});
