app.controller('l-header.controller', function($scope, $state){
  var ctrl = this;

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.main.header = {};
    $scope.main.header.date = new Date();
    $scope.bureger = angular.element(document.querySelector('#bureger'));
  }
  $scope.openProfile = function () {
    $state.go('profile');
  }
  $scope.main.showHideBtnEvent = document.querySelector('.btn-round-warning');
  $scope.$watch('main.eventSideBar', function (newVal) {
    if (!$scope.main.eventSideBar) return;
    $scope.main.eventSideBar = newVal;
  })
  $scope.$watch('main.content', function(newVal){
    if (!$scope.main.content) return;
    $scope.main.content = newVal;
  })

  $scope.main.showHideEventHandler = function () {
    $scope.main.eventSideBar.classList.toggle('no-vis');
    $scope.main.eventSideBar.classList.toggle('is-vis');
    $scope.main.eventSideBar.classList.toggle('no-vis-sm-screen');
    $scope.main.eventSideBar.classList.toggle('is-vis-sm-screen');
    $scope.main.content.classList.toggle('col-lg-6');
    $scope.main.content.classList.toggle('col-md-6');
    $scope.main.content.classList.toggle('col-lg-9');
    $scope.main.content.classList.toggle('col-md-9');
    $scope.bureger.toggleClass("fa-indent");
    $scope.bureger.toggleClass("fa-outdent");
    $scope.bureger.toggleClass('hide-scroll');
  }
});
