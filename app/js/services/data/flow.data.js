app.service('$flowData', function($data){
    this.req = function(param){
        return $data.request(param);
    }
})