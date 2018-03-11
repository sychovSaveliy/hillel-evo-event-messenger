app.directive("rightSide", function () {
  return {
    scope: {
      model: '='
    },
    controller: function ($scope, $state) {
      let plusCurr = document.getElementById("curr"),
          plusDraft = document.getElementById("draft");
          $scope.staticMenu = [
            {
              title: 'Create event' ,
              link: "new-event"

            },
            {
              title: 'My calendar' ,
              link: "calendar"

            }
          ];

      $scope.currEvList = false;
      $scope.draftEvList = false;

      $scope.showCurrEvList = function () {
        $scope.currEvList = !$scope.currEvList;
        plusCurr.classList.toggle("fa-plus");
        plusCurr.classList.toggle("fa-minus");
      };

      $scope.showDraftList = function () {
        $scope.draftEvList = !$scope.draftEvList;
        plusDraft.classList.toggle("fa-plus");
        plusDraft.classList.toggle("fa-minus");
      };

      $scope.oneEvent = function (data) {
      };
      $scope.newEvent = function (data) {
        $state.go(data);
      };
      $scope.newEvent = function (data) {
        $state.go(data);
      };
    },
    restrict: "A",
    templateUrl: 'app/js/directives/right-side-menu/right-side.html',
  }
});
