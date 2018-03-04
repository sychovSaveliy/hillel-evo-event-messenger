app.directive("settings", function () {
  return {
    scope: {
      model: '='
    },
    controller: function ($scope) {

    },
    restrict: "A",
    templateUrl: 'app/js/directives/settings/settings.html',
  }
});
