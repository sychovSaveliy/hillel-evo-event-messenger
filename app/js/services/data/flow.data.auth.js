app.service('$flowDataAuth', function($data, $q){
    this.requestAuth = function(param){
       let promise = $q((resolve, reject) =>{
            $data.auth.action(param, resp => resp.info.success? resolve(resp.info.token) : reject(resp));
       });
       return  promise;
    }
})
