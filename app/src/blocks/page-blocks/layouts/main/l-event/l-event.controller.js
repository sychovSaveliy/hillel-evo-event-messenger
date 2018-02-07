app.controller('l-event.controller', function($scope){
  var ctrl = this;

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.event = {};
  }

});
