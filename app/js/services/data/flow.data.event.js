app.service('$flowDataEvent', function($data, $q){
  this.getDataEvent = function(param){
    let promise = $q((resolve, reject) =>{
      $data.event.action(param, resp =>  resp ? resolve(resp) : reject(resp));
    });

    return  promise;
  }
});
