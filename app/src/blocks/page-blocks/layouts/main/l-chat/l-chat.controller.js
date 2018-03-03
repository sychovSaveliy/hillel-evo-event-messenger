app.controller('l-chat.controller', function($scope, $transferService, $timeout, $postSendMes){
  let ctrl = this;
  ctrl.$onInit = _init;

  function _init () {
    $scope.main = $scope.main || {};
    $scope.main.inputMes = document.querySelector('.text-block');
    $scope.main.sendBtn = document.querySelector('button[type = "send"]');
    $scope.main.message;
    $scope.main.chatWrapper = document.querySelector('.chat-wraper');
    $scope.main.chatBox = document.querySelector('.chat-box');
    $scope.main.head = document.querySelector('.div-row-main-page');
    $scope.main.footer = document.querySelector('.div-row-footer');
    $scope.main.showArrow = false;
  }
  
  function scrollHandler () {
    $scope.main.contentChatHeight = $scope.main.chatBox.clientHeight;
    $transferService.setData({name: 'currScroll', data: $scope.main.contentChatHeight-$scope.main.chatHeightVis});
    $scope.main.chatWrapper.scrollTo(0, $transferService.getData('currScroll'));
  }

  function arrowScrollHandler () {
    $scope.main.contentChatHeight = $scope.main.chatBox.clientHeight;
    $scope.main.chatHeightVis = document.documentElement.clientHeight -
    $scope.main.head.clientHeight  -
    $scope.main.footer.clientHeight;

    $scope.main.chatWrapper.onscroll = function(){
      let scrolled = $scope.main.chatWrapper.pageYOffset || $scope.main.chatWrapper.scrollTop;
      $scope.main.chatHeightVis = document.documentElement.clientHeight -
      $scope.main.head.clientHeight -
      $scope.main.footer.clientHeight;
      $scope.main.contentChatHeight = $scope.main.chatBox.clientHeight;
      $transferService.setData({name: 'currScroll', data: $scope.main.contentChatHeight-$scope.main.chatHeightVis});
        if (scrolled < $scope.main.contentChatHeight-2*$scope.main.chatHeightVis) {
          $scope.main.showArrow = true;
          $scope.$apply();
        }
        else if (scrolled >= $scope.main.contentChatHeight-2*$scope.main.chatHeightVis) {
          $scope.main.showArrow = false;
          $scope.$apply();
        }
      };
      $scope.scrollDown = function () {
        $scope.main.chatWrapper.scrollTo(0, $transferService.getData('currScroll')); 
        };
      $scope.main.chatWrapper.scrollTo(0, $scope.main.contentChatHeight-$scope.main.chatHeightVis);
  }

  $scope.sendMesHandler = function(author, id, text){
    let currentTime = new Date();
    let month = currentTime.getMonth() + 1;
    if (!$scope.main.inputMes.value) return;
    let sender = {
      author: author,
      id: id,
      text: text,
      date: currentTime.getDate() + '-'+month+'-'+currentTime.getFullYear(),
      time: currentTime.getHours() +':'+ currentTime.getMinutes() +':'+ currentTime.getSeconds()
    };
    $postSendMes.sendMes(sender)
      .then(response => {
        $scope.main.chats = response.messages;
      });
    $scope.main.inputMes.value = "";

    $timeout(scrollHandler,100)
  };

  $scope.$watch(function() {
    return $transferService.getData('chats')
  }, function(newVal){
    $scope.main.chats = newVal;
      $timeout(arrowScrollHandler)
  });

  let note = document.querySelector('#note');
  $scope.showNote = function () {
    note.classList.toggle('non-vis');
  }
});
