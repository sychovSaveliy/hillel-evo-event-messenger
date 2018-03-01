app.controller('l-chat.controller', function($scope, $transferService, $timeout){
  $scope.main = $scope.main || {};
  let down = document.querySelector('#down');

  $scope.$watch(function() {
    return $transferService.getData('chats')
  }, function(newVal){
    $scope.main.chats = newVal;
      $timeout(function(){
        $scope.main.contentChatHeight = document.querySelector('.chat-wraper').clientHeight;
        $scope.main.chatHeightVis = document.documentElement.clientHeight -
          document.querySelector('.div-row-main-page').clientHeight -
          document.querySelector('.footer').clientHeight;

        document.querySelector('.content').onscroll = function(){
        let scrolled = document.querySelector('.content').pageYOffset || document.querySelector('.content').scrollTop;
        $scope.main.chatHeightVis = document.documentElement.clientHeight -
          document.querySelector('.div-row-main-page').clientHeight -
          document.querySelector('.footer').clientHeight;
        $scope.main.contentChatHeight = document.querySelector('.chat-wraper').clientHeight;
        $transferService.setData({name: 'currScroll', data: $scope.main.contentChatHeight-$scope.main.chatHeightVis});

        if (scrolled < $scope.main.contentChatHeight-2*$scope.main.chatHeightVis) {
          down.classList.remove('non-vis');
        }
        else if (scrolled >= $scope.main.contentChatHeight-2*$scope.main.chatHeightVis) {
          down.classList.add('non-vis');
        }
        $scope.$apply();
      };
        $scope.scrollDown = function () {
          document.querySelector('.content').scrollTo(0, $transferService.getData('currScroll'));
        }
        document.querySelector('.content').scrollTo(0, $scope.main.contentChatHeight-$scope.main.chatHeightVis);
    })

  });
});
