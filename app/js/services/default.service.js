app.service('$defautService', function($default){
    var self = this;
    this.getURI = getURI;
    function getURI(){
        return 'http://ec2-54-246-235-36.eu-west-1.compute.amazonaws.com:8080/signin';
    }
});
