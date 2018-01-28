app.controller('main.contactList', function($scope){
  let ctrl = this;
  ctrl.$onInit = _init;

  function _init () {
    $scope.main = $scope.main || {};
    $scope.main.contactList = {};
  }

  $scope.$watch('contactsArray', function(newVal){
      $scope.main.contactsList = newVal;
    });
});
