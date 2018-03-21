app.controller('main', function($scope, $flowDataUser, $transferService, $timeout){

  let _token = $transferService.getData('token') || sessionStorage.getItem('token');

  $scope.main = $scope.main || {};
  $scope.main.eventsForCalendar = [];
  $scope.getUserDataById = params => $flowDataUser.getDataUser(params)
    .then(response => {
      $scope.main.userData = response;
      $scope.main.eventsAll = response.events;
      $scope.main.userName = response.name;
      $scope.main.avatar = response.avatar;

      $scope.main.eventsAll.currentEvents.data.forEach(function(item, index){
        let eventDate = item.date[0].confirmed;
        let eventDay = eventDate.substr(0, 2);
        let eventMonth = eventDate.substr(3, 2);
        let eventYear = eventDate.substr(6, 4);
        $scope.main.eventsForCalendar.push({title: item.name,
        start: new Date(eventYear, eventMonth-1, eventDay)  
        })  
      })
      $transferService.setData({name: 'eventsForCalendar', data: $scope.main.eventsForCalendar})
    },
  error => $scope.errorMessage = error.info.message)
  $scope.getUserDataById({token: _token});
  $scope.main.settings = $scope.main.settings || {};
  $scope.main.searchEvents = $scope.main.searchEvents || {};
  $timeout(function(){
    $scope.main.eventSideBar = document.querySelector('.right-sidebar');
    $scope.main.content = document.querySelector('.content');
  })
});
