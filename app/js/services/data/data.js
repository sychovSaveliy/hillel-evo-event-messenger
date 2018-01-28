app.factory('$data', ['$resource', '$defautService', '$q', function ($resource, $defautService, $q) {
	let _$data = {},
		_url = $defautService.getURI();

    _$data.auth = $resource(_url + '/auth/',{},{
		action:{
			method: "POST"
		}
	});
	
	_$data.main = $resource(_url + '/user/:token', {},{
		action:{ 	
			method: "GET",
			params:{
				token:"@token"
			}
		}
	});


return _$data;
}]);