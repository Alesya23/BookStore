/**
 * Created by Alesya on 22.08.2016.
 */
myApp.controller("UserCtrl", function($scope, $rootScope, $window) {

    if (!$rootScope.user)
        $window.location.href = '#/login';

      $scope.user = $rootScope.user;
    
    
    
    
});