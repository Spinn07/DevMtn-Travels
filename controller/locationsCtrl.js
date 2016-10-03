angular.module('devmtnTravel')
.controller('locationsCtrl',function($scope, $stateParams, mainSrv){
  $scope.travelData = mainSrv.travelInfo;

})
