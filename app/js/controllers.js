angular.module('nflNewsApp.controllers', []).

controller('gamesController', function($scope, nflNewsAPIservice) {
    //$scope.nameFilter = null;
    $scope.gamesinProgress = false;
    /*$scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };*/

    nflNewsAPIService.getCurrentScores().success(function(response) {
        //Digging into the response to get the relevant data
        if (response == true) {
            $scope.gamesInProgress = true;
        }
    });
});

/* Driver controller */
/*controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
});*/