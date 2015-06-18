app.factory('Res', ['$http','API_URL', function ($http, API_URL) {

    function getRes(id, cb) {
      $http
        .get(`${API_URL}/${id}.json`)
        .success(cb)
        .error(function(data, error) { console.log(error); });
    }

    return {getRes:getRes};
  }]);
