app.factory('$data', ['$resource', '$defaultService', '$q', function ($resource, $defaultService, $q) {
  let authorisation_token = function () {
      return 'Bearer ' + sessionStorage.getItem("token");
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
  _$data.confirm = $resource(_url + '/confirmation/',{},{
    action: {
      method: "GET",
      params: {
        token: "@token"
      }
    }
  });
  _$data.new_event = $resource(_url + '/new_event/',{},{
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

	_$data.main = $resource(_url + '/user/', {},{
		action:{
			method: "GET",
      headers: {
        /**
         * @return {string}
         */
        'Authorization': authorisation_token()
      }
		}
	});

  _$data.event = $resource(_url + '/event/:id', {},{
    action:{
      method: "GET",
      params:{
        data:"@id"
      },
      headers: {
        /**
         * @return {string}
         */
        'Authorization': authorisation_token()
      }
    }
  });

	_$data.chats = $resource(_url + '/chat/:token', {}, {
	  action: {
	    method: "GET",
      params: {
	      params: "@token"
      },
      headers: {
        /**
         * @return {string}
         */
        'Authorization': authorisation_token()
      }
    }
  });

  _$data.sendMes = $resource(_url + '/sendmes/',{},{
    action:{
      method: "POST",
      headers: {
        /**
         * @return {string}
         */
        'Authorization': authorisation_token()
      }
    }
  });


  return _$data;
}]);
