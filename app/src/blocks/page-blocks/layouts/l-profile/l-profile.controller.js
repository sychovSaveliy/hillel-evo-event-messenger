app.controller('l-profile', function($scope, $state, $flowDataUser, $transferService){

  var ctrl = this;

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.profile = $scope.profile || {};
  }
});
