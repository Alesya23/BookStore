/**
 * Created by Alesya on 19.08.2016.
 */
myApp.controller("LoginCtrl", function($scope, $http, $rootScope, $window) {

    $scope.user = $rootScope.user;

    $http.get("users/users.json").success(function(data, status, headers, config) {
        $scope.users = data;


    });


    $scope.logIn = function () {

        for (var i = 0; i < $scope.users.length; i++) {

            if ($scope.userId === $scope.users[i].id) {

                $scope.user = $scope.users[i];
                $rootScope.user = $scope.user;

                sessionStorage.setItem('user', JSON.stringify($rootScope.user));

                $window.location.href = '#/';

                break;

            } else if ($scope.userId !== $scope.users[i].id && i === ($scope.users[i].length - 1)) {

                alert("Invalid users ID!");
                break;
            }
        }

    };



    

    

});
