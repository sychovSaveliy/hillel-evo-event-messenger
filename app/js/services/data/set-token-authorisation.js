app.service('$tokenAuth', function($data){
  this.auth = function(param){
    var date = new Date(new Date().getTime() + 120 * 1000);
    var user = param.info.id;
    var token = param.info.token;
    console.log(user);
    document.cookie = "token="+token+" ; path=/; expires=" + date.toUTCString();
  }
});
