app.service('$postSendMes', function($data, $q){
  this.sendMes = function(param){
    let promise = $q((resolve, reject) =>{
      $data.sendMes.action(param, resp => resp? resolve(resp) : reject(resp));
    });
    return  promise;
  }
})
