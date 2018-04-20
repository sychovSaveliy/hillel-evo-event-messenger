app.controller('l-view.event', function($scope, $flowDataEvent, $transferService, $state, $timeout){
  let ctrl = this;

  $scope.btnConfEv = angular.element(document.querySelector('#confEv'));
  $scope.btnSaveEv = angular.element(document.querySelector('#saveEv'));
  $scope.btnDelDraft = angular.element(document.querySelector('#delDraft'));
  $scope.btnSendInv = angular.element(document.querySelector('#sendInv'));
  $scope.btnOpenEd = angular.element(document.querySelector('#openEditor'));
  $scope.placeDrafts = angular.element(document.querySelector('#placeDrafts'));
  $scope.placeConfr = angular.element(document.querySelector('#placeConfr'));
  $scope.dateConfr = angular.element(document.querySelector('#dateConfr'));
  $scope.dateDrafts = angular.element(document.querySelector('#dateDrafts'));

  ctrl.$onInit = _onInit;

  function _onInit() {
    $scope.main = $scope.main || {};
    $scope.viewEvent = $scope.viewEvent || {};
    if($transferService.getData('one-event')){
      $scope.viewEvent = $transferService.getData('one-event');
      renderAll();
    } else {
      var id = "";
      var idEvent = window.location.href.toString().split("/view-event/");
      for(let i=0; i < idEvent.length; i++){
        id = idEvent[1];
      }
      refreshEvenet(id);
    }
  }


  function renderAll() {
    let dateDrafts = [],
      dateConf = "",
      placeDraft = [],
      placeConf = "",
      membersInvited = [],
      membersConf = [],
      creator;

    //check dates
    for (let i = 0; i < $scope.viewEvent.date.length; i++) {
      for(let key in $scope.viewEvent.date[i]){
        if($scope.viewEvent.date[i].confirmed === ''){
          if(key === "drafts"){
            dateDrafts = $scope.viewEvent.date[i][key];
            $scope.dateDrafts.removeClass('non-vis');
          }
          dateConf = $scope.viewEvent.date[i][key];
        } else if ($scope.viewEvent.date[i].confirmed !== ''){
          dateConf = $scope.viewEvent.date[i].confirmed;
          $scope.dateConfr.removeClass('non-vis');
        }
      }
    }
    //check places
    for (let i = 0; i < $scope.viewEvent.place.length; i++) {
      for(let key in $scope.viewEvent.place[i]){
        if($scope.viewEvent.place[i].confirmed === ''){
          if(key === "drafts"){
            placeDraft = $scope.viewEvent.place[i][key];
            $scope.placeDrafts.removeClass('non-vis');
          }
          placeConf = $scope.viewEvent.place[i][key];
        } else if ($scope.viewEvent.place[i].confirmed !== ''){
          placeConf = $scope.viewEvent.place[i].confirmed;
          $scope.placeConfr.removeClass('non-vis');
        }

      }
    }
    //creating members groups
    for (let i = 0; i < $scope.viewEvent.members.length; i++) {
      for(let key in $scope.viewEvent.members[i]){
        if(key === "invited"){
          membersInvited = $scope.viewEvent.members[i][key];
        }
        membersConf = $scope.viewEvent.members[i][key];
      }
    }
    for (let i=0; i < membersConf.length; i++){
      if(membersConf[i].role === 'admin'){
        creator = membersConf[i].name;
      }
    }
    //creating model
    $scope.model = {
      status: $scope.viewEvent.status,
      title: $scope.viewEvent.name,
      creator: creator,
      members: {
        membersInv: membersInvited,
        membersConf: membersConf
      },
      placeDrafts: placeDraft,
      placeConf: placeConf,
      dateConf: dateConf,
      dateDrafts: dateDrafts,
      additional: $scope.viewEvent.additional
    };
  }


  function refreshEvenet(id) {
    $flowDataEvent.getDataEvent({'id': id})
      .then(function(response){
        $scope.viewEvent = response;
        renderAll();
        return $scope.viewEvent;
      });
  }

  $scope.openEditor = function () {
    $scope.$watch('main.userName', function(newValue) {
      if(!$scope.main.userName){
        return;
      }
      $scope.main.userName = newValue;
      $scope.btnOpenEd.toggleClass('fa-pencil').toggleClass('fa-close');
      if(($scope.model.status === true) && ($scope.model.creator === $scope.main.userName)){
        $scope.btnDelDraft.toggleClass('non-vis').val('delete event');
      } else if (($scope.model.status === true) && ($scope.model.creator !== $scope.main.userName)){
        $scope.btnDelDraft.toggleClass('non-vis').val('cancel participation');
      } else if (($scope.model.status === false) && ($scope.model.creator === $scope.main.userName)){
        $scope.btnSendInv.toggleClass('non-vis');
        $scope.btnDelDraft.toggleClass('non-vis');
        $scope.btnSaveEv.toggleClass('non-vis');
      } else if (($scope.model.status === false) && ($scope.model.creator !== $scope.main.userName)){
        $scope.btnConfEv.toggleClass('non-vis');
        $scope.btnDelDraft.toggleClass('non-vis').val('decline participation');
      }
    });
  }
});
