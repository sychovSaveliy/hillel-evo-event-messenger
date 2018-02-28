app.controller('l-footer.controller', function($scope, $postSendMes){
    $scope.main.inputMes = document.querySelector('.text-block');
    $scope.main.sendBtn = document.querySelector('button[type = "send"]');
    $scope.main.message;


      $scope.sendMesHandler = function(author, id, text, date, time){

        if ($scope.main.inputMes.value === "") {
        return
        }
        let sender = {
          author: author,
          id: id,
          text: text,
          date: date,
          time: time
        };
        $postSendMes.sendMes(sender)
          .then(response => {
            console.log(response.messages);
            $scope.main.chats = response.messages;
          });
        $scope.main.inputMes.value = "";
      }



})
