angular.module('devmtnTravel')
.controller('locationsCtrl',function($scope, $stateParams, mainService){
  $scope.test = "Location";
  // $scope.travelData = mainService.travelInfo;
  $scope.locationData = mainService.travelInfo;

});
