var module = angular.module("app",[]);

module.controller("TimeCtrl",function($scope){
	$scope.time = new Date().toTimeString();
	$scope.latestTime= function(){
		console.log("Button Click");
		$scope.time = new Date().toTimeString();
	};
});

module.controller("FormCtrl",function($scope){

	$scope.changed = function(){
		$scope.msg="Changed call";
	};

	$scope.submit = function(){

		console.log("name = "+$scope.name + ",changeValue="+$scope.changeValue+",radio="+$scope.radio+",sing="+$scope.sing+",date="+$scope.date);
		$scope.org_msg="Values are === > "+"name = "+$scope.name + ",changeValue="+$scope.changeValue+",radio="+$scope.radio+",sing="+$scope.sing+",date="+$scope.date;
	};
});

module.controller("Ctrl1",function($scope){
	$scope.value="Value from Controller1";
});

module.controller("Ctrl2",function($scope){
	// $scope.value="Value from Controller2";
});

module.controller("Ctrl3",function(){
	this.value="Value from Controller3";
});

module.controller("Ctrl4",function($scope){
	 this.value="Value from Controller4";
});