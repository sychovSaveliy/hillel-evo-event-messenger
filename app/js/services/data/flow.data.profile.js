app.service('$flowDataProfile', function($data, $q){
  this.requestProfile = function(param){
    let promise = $q((resolve, reject) =>{
      $data.profile.action(param, resp => resp.info.success? resolve(resp.info.token) : reject(resp));
    });
    return  promise;
  }
});
