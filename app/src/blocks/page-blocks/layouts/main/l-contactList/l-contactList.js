app.controller('main.contactList', function($scope, $flowDataChats, $transferService){
  let ctrl = this;
  ctrl.$onInit = _init;

  function _init () {
    $scope.main = $scope.main || {};
    $scope.main.contactList = {};
  }

  $scope.onClickContact = function (id) {
    $flowDataChats.getDataChats({token: id})
      .then(function(response){
        $transferService.setData({name: 'chats', data: response.messages});
        $transferService.getData('chats');
      })
    return id;
  };

  $scope.$watch('main.userData', function(newVal){
      if (!$scope.main.userData) {
        return
      }
      else {
        $scope.main.contactsList = newVal;
        $scope.main.chatId = $scope.main.contactsList.chats[0];
      }
    });
});
