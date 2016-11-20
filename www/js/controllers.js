angular.module('starter.controllers', ['ngStorage'])
	.controller("DetailsCtrl", ["$scope", "$stateParams", "detailsList", "rating", function ($scope, $stateParams, detailsList, rating) {

		$scope.bid = $stateParams.bid;
		$scope.book;
		$scope.bookdata = detailsList.data.books;
		console.log($scope.book);
		for (var i = 0; i < $scope.bookdata.length; i++) {


			if ($scope.bookdata[i]._id == $scope.bid) {


				$scope.book = $scope.bookdata[i];
			}


		}

//					if (localStorage.getItem($scope.bid) == null) {
		//				$scope.ratingsObject.rating = $scope.bookdata[0].rating
		//			} else {
		//				$scope.ratingsObject.rating = localStorage.getItem($scope.bid);
		//			}

		$scope.rating = rating.get($scope.bid)

		$scope.ratingsObject = {
			iconOn: 'ion-ios-star',
			iconOff: 'ion-ios-star-outline',
			iconOnColor: 'rgb(200, 200, 100)',
			iconOffColor: 'rgb(200, 100, 100)',
			rating: $scope.rating,
			minRating: 1,
			callback: function (rating) {
				$scope.ratingsCallback(rating);
			}
		};


		$scope.ratingsCallback = function (rating) {
			localStorage.setItem($scope.bid, rating);
			console.log('Selected rating is : ', rating);
			ratingService.add(rating, $scope.bid);

		};
		$scope.ratingsObject.rating = localStorage.getItem($scope.bid);




	}])
	.controller("ListCtrl", ["$scope", "$stateParams", "titleList", function ($scope, $stateParams, titleList) {

		var cat = $stateParams.catid;
		console.log(cat);

		$scope.books = [];

		$scope.booksdata = titleList.data.books;

		console.log($scope.booksdata);

		var bookscount = $scope.booksdata.length;
		console.log(bookscount);
		for (var i = 0; i < bookscount; i++) {
			if ($scope.booksdata[i].cat_id == cat) {
				$scope.books.push($scope.booksdata[i]);
			}

		}
		//	if (cat == 0) {
		//	
		//	}
		console.log($scope.books)

}])
	.controller('DashCtrl', function ($scope) {})

.controller("MainCtrl", ["$scope", "categoryList", function ($scope, categoryList) {
	//get the category in var
	$scope.categories = categoryList.data;
	console.log($scope.categories);

}]);
//.controller('DashCtrl', function($scope) {})
//
//.controller('ChatsCtrl', function($scope, Chats) {
//  // With the new view caching in Ionic, Controllers are only called
//  // when they are recreated or on app start, instead of every page change.
//  // To listen for when this page is active (for example, to refresh data),
//  // listen for the $ionicView.enter event:
//  //
//  //$scope.$on('$ionicView.enter', function(e) {
//  //});
//
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
