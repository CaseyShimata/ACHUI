
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    //routes
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/home/validate_page', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/home/validate_data', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
