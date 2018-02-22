app.controller('l-chat.controller', function($scope, $transferService, $timeout){
  $scope.$watch(function() {
    return $transferService.getData('chats')
  }, function(newVal){
    $scope.main.chats = newVal;
      $timeout(function(){
      let contentChatHeight = document.querySelector('.chat-wraper').clientHeight;
      let content = document.querySelector('.chat-wraper');
      document.querySelector('.content').onscroll = function(){
        let scrolled = document.querySelector('.content').pageYOffset || document.querySelector('.content').scrollTop;
        $scope.$apply();
      };
        document.querySelector('.content').scrollTo(0, contentChatHeight);
    })

  });


});
