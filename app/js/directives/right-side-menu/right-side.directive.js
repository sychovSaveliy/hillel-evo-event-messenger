app.directive("rightSide", function () {
  return {
    scope: {
      model: '='
    },
    controller: function ($scope) {
      let plusCurr = document.getElementById("curr"),
          plusDraft = document.getElementById("draft");
          $scope.staticMenu = [
            {
              title: 'Create event' ,
              link: "#"

            },
            {
              title: 'My calendar' ,
              link: "#"

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
        console.log(data);
      };
    },
    restrict: "A",
    templateUrl: 'app/js/directives/right-side-menu/right-side.html',
  }
});
