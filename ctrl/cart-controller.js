/**
 * Created by Alesya on 21.08.2016.
 */
myApp.controller("CartCtrl", function($scope, $rootScope, $window, ngDialog) {

    if (!$rootScope.user)
        $window.location.href = '#/login';

    $scope.purchases = $rootScope.purchases;


    $scope.sum = (function () {

        var plus = 0;

        for(var i =0; i < $rootScope.purchases.length; i++) {

            plus += $rootScope.purchases[i].price;

        }
        return plus;
    }());
    
    



    $scope.buyNow = function () {


        for(var i=0; i < $scope.purchases.length; i++) {
        
        
            if( $rootScope.user.age < $scope.purchases[i].age ) {

                ngDialog.open({
                    template: 'Вы не можете совершить покупку, так как не достигли определенного возраста',
                    className: 'ngdialog-theme-default',
                    plain: true
                });

                break;
        
            } else if ($rootScope.user.cash < $scope.sum) {

                ngDialog.open({
                    template: 'Вы не можете совершить покупку, так как у Вас не достаточно денег',
                    className: 'ngdialog-theme-default',
                    plain: true
                });
                break;
        
            } else {
                $rootScope.user.cash -= $scope.sum;

                ngDialog.open({
                    template: 'Спасибо за покупку!',
                    className: 'ngdialog-theme-default',
                    plain: true
                });
                $rootScope.purchases.length = 0;

                setStorageItem('cart', $rootScope.purchases);
                setStorageItem('user', $rootScope.user);
            }
        
        }

    };



    $scope.getScope = function () {
        return this;
    };


    $scope.delNow = function (index, purch) {

        $scope.sum -= purch.price;
        $rootScope.purchases.splice(index, 1);
        setStorageItem('cart', $rootScope.purchases);

    }


    function getStorageItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    
    
    function setStorageItem(key, object) {
        sessionStorage.setItem(key, JSON.stringify(object));
    }

});