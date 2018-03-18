app.service('$defautService', function($default){
    var self = this;
    this.getURI = getURI;
    function getURI(){
      return $default.protocol + "://" + $default.host + ":" + $default.port;
    }
});
