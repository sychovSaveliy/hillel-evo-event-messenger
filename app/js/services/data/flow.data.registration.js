app.service('$flowDataRegistr', function($data, $q){
  this.requestRegistr = function(param){
    let promise = $q((resolve, reject) =>{
      $data.registration.action(param, resp => resp.access_token? resolve(resp.access_token) : reject(resp));
    });
    return  promise;
  }
});
