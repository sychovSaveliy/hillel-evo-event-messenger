app.factory('$data', ['$resource', '$defautService', '$q', function ($resource, $defautService, $q) {
    var src = $resource($defautService.getURI() + '/auth/'+':param',{param: '@param'},{
		action:{
			method: "POST"
		}
	});
	src.request = function (param) {
		var promise  = $q(function(resolve, reject){
			src.action(param, function(resp){
				if (resp.info.success == true) {
					resolve(resp);
				}
				else {
					reject(resp);
				}
			});
		});
		return promise;
	};
return src;
}]);