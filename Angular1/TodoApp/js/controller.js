var module = angular.module("app",[]);

module.controller("TodoCtrl",function($scope){
	var activities = [];

	$scope.add = function(){
		activities.push($scope.task);
		$scope.activities = activities;
	}

	$scope.remove = function(taskId){
		activities.pop(taskId);
		$scope.activities = activities;
	}
});

