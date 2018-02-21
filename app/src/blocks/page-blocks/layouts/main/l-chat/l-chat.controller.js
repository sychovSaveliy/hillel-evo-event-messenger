app.controller('l-chat.controller', function($scope, $transferService, $timeout){
  let down = document.querySelector('#down');

  $scope.$watch(function() {
    return $transferService.getData('chats')
  }, function(newVal){
    $scope.main.chats = newVal;
      $timeout(function(){
        let contentChatHeight = document.querySelector('.chat-wraper').clientHeight;
        let chatHeightVis = document.documentElement.clientHeight -
          document.querySelector('.div-row-main-page').clientHeight -
          document.querySelector('.footer').clientHeight;

        document.querySelector('.content').onscroll = function(){
        let scrolled = document.querySelector('.content').pageYOffset || document.querySelector('.content').scrollTop;
        let chatHeightVis = document.documentElement.clientHeight -
          document.querySelector('.div-row-main-page').clientHeight -
          document.querySelector('.footer').clientHeight;
        let contentChatHeight = document.querySelector('.chat-wraper').clientHeight;
        $transferService.setData({name: 'currScroll', data: contentChatHeight-chatHeightVis})

        if (scrolled < contentChatHeight-chatHeightVis) {
          down.classList.remove('non-vis');
        }
        else if (scrolled >= contentChatHeight-chatHeightVis) {
          down.classList.add('non-vis');
        }
        $scope.$apply();
      };
        $scope.scrollDown = function () {
          document.querySelector('.content').scrollTo(0, $transferService.getData('currScroll'));
        }
        document.querySelector('.content').scrollTo(0, contentChatHeight-chatHeightVis);
    })

  });


});
