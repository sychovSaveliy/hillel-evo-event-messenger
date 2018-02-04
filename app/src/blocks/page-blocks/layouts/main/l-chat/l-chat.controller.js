app.controller('l-chat.controller', function($scope, $transferService){
  $scope.$watch(function() {
    return $transferService.getData('chats')
  }, function(newVal){
    $scope.chats = newVal;
  });
});
