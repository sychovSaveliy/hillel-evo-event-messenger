app.service('$flowDataChats', function($data, $q){
  this.getDataChats = function(param){
    let promise = $q((resolve, reject) =>{
      $data.chats.action(param, resp =>  resp ? resolve(resp) : reject(resp));
    });

    return  promise;
  }
});
