app.service('$postNewEvent', function($data, $q){
  this.newEvent = function(param){
    let promise = $q((resolve, reject) =>{
      $data.new_event.action(param, resp => resp ? resolve(resp) : reject(resp));
    });
    return  promise;
  }
});
