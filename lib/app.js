
var myApp = angular.module("myApp", ['ngRoute', 'ngMap', 'ngDialog']);


myApp.config(['$routeProvider', function ($routeProvide) {
    $routeProvide
        .when('/',{
            templateUrl: 'template/main.html',
            controller: 'BookCtrl'
        })
        .when('/about',{
            templateUrl: 'template/about.html',
            controller: 'AboutCtrl'
        })
        .when('/login',{
            templateUrl: 'template/login.html',
            controller: 'LoginCtrl'
        })
        .when('/cart',{
            templateUrl: 'template/cart.html',
            controller: 'CartCtrl'
        })
        .when('/user',{
            templateUrl: 'template/user.html',
            controller: 'UserCtrl'
        })
        .otherwise({
            redictTo: '/'
        });
}]);



