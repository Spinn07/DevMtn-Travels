angular.module('devmtnTravel')
.controller('packagesCtrl',function($scope, $stateParams, mainSrv){
  $scope.travelData = mainSrv.travelInfo;

})
