angular.module('devmtnTravel')
.controller('packagesCtrl',function($scope, $stateParams, mainService){
  $scope.locationData = mainService.travelInfo;

});
