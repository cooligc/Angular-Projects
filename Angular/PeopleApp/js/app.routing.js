(function(){

	var modules = angular.module("people");

	modules.config(function($routeProvider,$routeSegmentProvider) {

		 $routeSegmentProvider.options.autoLoadTemplates = true;

	    $routeSegmentProvider
	    .when('/', 's1')
	    .segment('s1', {
            templateUrl: 'index.html'})
	    .within()
	    .segment('person',{
	    	templateUrl : "static/person/personDetails.html",
	    	controller : "PersonCtrl"
	    });
	});


})()