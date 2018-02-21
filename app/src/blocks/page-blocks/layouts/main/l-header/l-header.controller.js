app.controller('l-header.controller', function($scope){
  var ctrl = this;

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.header = {};
    $scope.main.header.date = new Date();
  }
});
