/**
 * Created by Alesya on 19.08.2016.
 */
(function () {

    myApp.controller("MainCtrl", MainController);

    function MainController($rootScope, $scope) {
        
        
        $rootScope.user = getStorageItem('user') ? getStorageItem('user') : null;
        $scope.user = $rootScope.user;

        $scope.getUser = function() {
            return $rootScope.user;
        };

        $scope.logOut = function () {
            $rootScope.user = null;
            $rootScope.sum = 0;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('cart');

        };

        $rootScope.purchases = getStorageItem('cart') ? getStorageItem('cart') : [];
        // $rootScope.purch = null;


        $scope.myCart = function () {

            if($rootScope.purchases.length > 0) {
                return true;
            }

        };

        function getStorageItem(key) {
            return JSON.parse(sessionStorage.getItem(key));
        }
        

        
    }

})();

