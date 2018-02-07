app.service('$flowDataUser', function($data, $q){
    this.getDataUser = function(param){
       let promise = $q((resolve, reject) =>{
            $data.main.action(param, resp =>  resp ? resolve(resp) : reject(resp));
       });

       return  promise;
    }
});
