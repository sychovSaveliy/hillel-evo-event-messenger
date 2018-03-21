app.controller('calendar.controller', function($scope, $compile, $timeout, uiCalendarConfig, $transferService){
  
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  
  $scope.events = $transferService.getData('eventsForCalendar') 
  
  $scope.eventsF = function (start, end, timezone, callback) {
    let s = new Date(start).getTime() / 1000;
    let e = new Date(end).getTime() / 1000;
    let m = new Date(start).getMonth();
    let events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
    callback(events);
  };

  $scope.calEventsExt = {
    color: '#f00',
    textColor: 'yellow',
    events: [
      {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ]
  };

  $scope.addRemoveEventSource = function(sources,source) {
    let canAdd = 0;
    angular.forEach(sources,function(value, key){
      if(sources[key] === source){
        sources.splice(key,1);
        canAdd = 1;
      }
    });
    if(canAdd === 0){
      sources.push(source);
    }
  };

  $scope.addEvent = function() {
    $scope.events.push({
      title: 'Open Sesame',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      className: ['openSesame']
    });
  };

  $scope.remove = function(index) {
    $scope.events.splice(index,1);
  };

  $scope.changeView = function(view,calendar) {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
  };

  $scope.renderCalendar = function(calendar) {
    $timeout(function() {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    });
  };

  $scope.eventRender = function( event, element, view ) {
    element.attr({'tooltip': event.title,
      'tooltip-append-to-body': true});
    $compile(element)($scope);
  };


  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay',
        center: 'title',
        right: 'today prev,next'
      },
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
    }
  };
  $scope.eventSources = [$scope.events, $scope.eventsF];
})
