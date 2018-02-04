app.factory('$transferService', function(){
    let data = {}, obj = {};

    obj.setData = function(params){
        data[params.name] = params.data;
    }

    obj.getData = function(name) {
        return data[name]
    }

    return obj;
})
