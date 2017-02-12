/*
* @Author: guyueyue
* @Date:   2017-02-11 11:42:03
* @Last Modified by:   guyueyue
* @Last Modified time: 2017-02-12 09:50:27
*/

'use strict';
angular.module('movieApp.nowplayingCtrl',[])
.controller('nowplayingCtrl',['$scope','$movieServ',function($scope,$movieServ){
	$scope.movie = {};
	// $http就是帮我们实现ajax请求的
	// $http({
	// 	url:'data.json',

	// }).success(function(data){
	// 		$scope.movie = data;
	// 	});
	 $movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 5,
        start: 0
    }, function(data) {
    	$scope.movie=data;
    	$scope.$apply();
        console.log(data);
    })

}]);
