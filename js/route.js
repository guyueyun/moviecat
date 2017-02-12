/*
* @Author: guyueyue
* @Date:   2017-02-11 11:41:06
* @Last Modified by:   guyueyue
* @Last Modified time: 2017-02-11 16:09:01
*/

'use strict';
angular.module('movieApp.route',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tmps/index-tmp.html'
	}).when('/nowplaying',{
		templateUrl:'tmps/nowplaying-tmp.html',
		controller:'nowplayingCtrl'
	}).when('/later',{
		templateUrl:'tmps/later-tmp.html',
		controller:'laterCtrl'
	}).when('/top250',{
		templateUrl:'tmps/top250-tmp.html',
		controller:'top250Ctrl'
	})
}]);






