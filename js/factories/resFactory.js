app.factory('Res', ['$http','API_URL', function ($http, API_URL) {

    function getRes(key) {
      $http
        .get(`${API_URL}/homes.json `)
        .success(function(d){console.log(d)})
        .error(function(data, error) { console.log(error); });
    }

    return {getRes:getRes};
  }]);
