app.factory('$data', ['$resource', '$defaultService', '$q', function ($resource, $defaultService, $q) {
  let authorisation_token = function () {
      return 'Bearer ' + localStorage.getItem("token");
    };

	let _$data = {},
		_url = $defaultService.getURI();

    _$data.auth = $resource(_url + '/signin/',{},{
		action:{
			method: "POST"
		}
	});
  _$data.registration = $resource(_url + '/register/',{},{
    action: {
      method: "POST"
    }
    });
  _$data.profile = $resource(_url + '/profile/',{},{
    action: {
      method: "POST",
      headers: {
        /**
         * @return {string}
         */
        'Authorization': authorisation_token()
      }
    }
  });
  _$data.new_event = $resource(_url + '/new_event/',{},{
    action: {
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
