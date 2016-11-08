(function(){

	var modules = angular.module("people");
	modules.controller("HeaderCtrl",function($scope,HeaderSrvs){
		$scope.title = HeaderSrvs;
	});

	modules.controller("FooterCtrl",function($scope,FooterSrvs){
		$scope.footer = FooterSrvs;
	});

	modules.controller("PersonCtrl",function($scope){
		$scope.details = "Hello PersonCtrl";
		console.log($scope.details);
	});

})()