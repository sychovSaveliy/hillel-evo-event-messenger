app.service('$flowDataConfirm', function($data, $q){
  this.requestConfirm = function(param){
    let promise = $q((resolve, reject) =>{
      $data.confirm.action(param, resp => resp.access_token || resp.status === 200? resolve(resp) : reject(resp));
    });
    return  promise;
  }
});
