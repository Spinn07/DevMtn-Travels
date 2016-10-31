angular.module('devmtnTravel')
    .controller('bookedCtrl', function($scope, $stateParams, mainService, $state) {
        $scope.test = 'Hello World';
        var locationId = $stateParams.id;
        $scope.locationInfo = function(locationId) {
            for (var i = 0; i < mainService.travelInfo.length; i++) {
              console.log(mainService.travelInfo[i].id, locationId);
                if (mainService.travelInfo[i].id == locationId) {
                  $scope.location = mainService.travelInfo[i];
                }
            }
        };
        $scope.locationInfo(locationId);

    });
