angular.module('nflNewsApp.services', [])
    .factory('nflNewsAPIService', function($http) {
        var nflAPI = {};

        nflAPI.getCurrentScores = function(req) {
            return $http({
                method: 'GET',
                url: 'https://api.fantasydata.net/v3/nfl/scores/JSON/AreAnyGamesInProgress',
                headers: {
                    'Ocp-Apim-Subscription-Key': '9a7b6708b29f49d581330ffaf2950696'
                }
            })
        }

        /*ergastAPI.getDriverDetails = function(id) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getDriverRaces = function(id) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
            });
        }*/

        return nflAPI;
    });