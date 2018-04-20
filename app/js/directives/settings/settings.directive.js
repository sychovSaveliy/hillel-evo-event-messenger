app.directive("settings", function ($state) {
  return {
    scope: {
      model: '='
    },
    link: function ($scope) {
      $scope.logOut = function(){
        sessionStorage.removeItem('token');
        $state.go('login');
      }
    },
    restrict: "A",
    templateUrl: 'app/js/directives/settings/settings.html',
  }
});
