app.factory('$data', ['$resource', '$defautService', '$q', function ($resource, $defautService, $q) {
	let _$data = {},
		_url = $defautService.getURI();

    _$data.auth = $resource(_url,{},{
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

	_$data.chats = $resource(_url + '/chat/:token', {}, {
	  action: {
	    method: "GET",
      params: {
	      params: "@token"
      }
    }
  });

  _$data.sendMes = $resource(_url + '/sendmes/',{},{
    action:{
      method: "POST"
    }
  });


  return _$data;
}]);
