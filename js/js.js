var app = angular.module('servicesApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"});

}]);

app.constant('API_URL', 'https://residential.firebaseio.com');
