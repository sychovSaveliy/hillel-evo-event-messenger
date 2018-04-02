app.service('$defaultService', function($default){
    var self = this;
    this.getURI = getURI;
    function getURI(){
        return $default.protocol + "://" + $default.host + ":" + $default.port;
    }
});
