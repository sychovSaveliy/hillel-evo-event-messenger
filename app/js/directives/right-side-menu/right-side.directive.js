app.directive("rightSide", function () {
  return {
    scope: {
      model: '='
    },
    controller: function ($scope, $state, $flowDataEvent, $transferService) {
      let plusCurr = document.getElementById("curr"),
          plusDraft = document.getElementById("draft"),
          eventSideBar = document.querySelector('.right-sidebar');
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

      var oldId = '';
      $scope.onClickEvent = function (id) {
        if(oldId !== id){
          $flowDataEvent.getDataEvent({id: id})
            .then(function(response){
              oldId = response.id;
              $transferService.setData({name: 'one-event', data: response});
              return id;
            })
            .then(function () {
              $state.go('view-event', {'id': id});
            });

        }

        $scope.$watch('one-event', id, function (newVal, id) {
          if(newVal===id){
            $flowDataEvent.getDataEvent({id: newVal})
              .then(function(response){
                $transferService.setData({name: 'one-event', data: response});
              });
          }
        })
      };

      $scope.newEvent = function (data) {
        $state.go(data);
        eventSideBar.classList.toggle('no-vis-sm-screen');
        eventSideBar.classList.toggle('is-vis-sm-screen');
      };
    },
    restrict: "A",
    templateUrl: 'app/js/directives/right-side-menu/right-side.html',
  }
});
