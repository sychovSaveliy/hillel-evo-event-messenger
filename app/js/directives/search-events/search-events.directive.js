app.directive("searchEvents", function () {
  return {
    scope: {
      model: '='
    },
    controller: function ($scope) {

    },
    restrict: "A",
    templateUrl: 'app/js/directives/search-events/search-events.html',
  }
});
