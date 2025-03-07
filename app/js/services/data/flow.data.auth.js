app.service('$flowDataAuth', function($data, $q){
    this.requestAuth = function(param){
       return $q((resolve, reject) =>{
         $data.auth.action(param, resp => resp.success || resp.status === 200? resolve(resp.access_token) : reject(resp));
       });
    }
});
