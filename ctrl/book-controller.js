myApp.controller("BookCtrl", function($scope, $http, $location, $rootScope, ngDialog) {

	

	$http.get("books/books.json").success(function(data, status, headers, config) {
		$scope.books = data;
	});


	
	//sort

	$scope.sortField = undefined;
	$scope.reverse = false;

	$scope.sort = function(fieldName) {
		if ($scope.sortField === fieldName) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.sortField = fieldName;
			$scope.reverse = false;
		}
	};
	
	$scope.isSortUp = function (fieldName) {
		return $scope.sortField === fieldName && !$scope.reverse;
	};
	$scope.isSortDown = function (fieldName) {
		return $scope.sortField === fieldName && $scope.reverse;
	};

	//categories
	
	$scope.genre = undefined;

	$scope.category = function (genre) {
		if($scope.genre === genre) {
			return;
		}
	}

	// cart


	$scope.purchases = $rootScope.purchases;

	
	$scope.getScope = function() {
		return this;
	};


	$scope.addToCart = function (book) {

		$scope.purchases.push(book);

		ngDialog.open({
			template: 'Книга добавлена в корзину',
			className: 'ngdialog-theme-default',
			plain: true
		});

		sessionStorage.setItem('cart', JSON.stringify($rootScope.purchases));
		

	};
	
	

});




