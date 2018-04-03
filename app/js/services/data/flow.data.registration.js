app.service('$flowDataRegistr', function($data, $q){
  this.requestRegistr = function(param){
    let promise = $q((resolve, reject) =>{
      $data.registration.action(param, resp => resp? resolve(resp) : reject(resp));
    });
    return  promise;
  }
});
