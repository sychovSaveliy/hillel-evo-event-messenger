app.controller('l-footer.controller', function($scope, $postSendMes){
    $scope.main.inputMes = document.querySelector('.text-block');
    $scope.main.sendBtn = document.querySelector('button[type = "send"]');
    $scope.main.message;


      $scope.sendMesHandler = function(author, id, text){
        let currentTime = new Date();
        let month = currentTime.getMonth() + 1;
        if ($scope.main.inputMes.value === "") {
        return
        }
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
      }



})
