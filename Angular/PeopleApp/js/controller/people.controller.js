(function(){

	var modules = angular.module("people");
	modules.controller("HeaderCtrl",function($scope,HeaderSrvs){
		$scope.title = HeaderSrvs;
	});

	modules.controller("FooterCtrl",function($scope,FooterSrvs){
		$scope.footer = FooterSrvs;
	});

	modules.controller('MyModalController', function (myModal) {
  this.close = myModal.deactivate;
})
modules.controller('AppController', function (myModal) {
  this.show = myModal.activate;
});


	modules.controller("PersonCtrl",function($scope,PersonSrvs){
		var self = this;
		
		$scope.isCreate = false;
		$scope.isEditable = true;

		$scope.toggleButton = function(){
			$scope.isEditable = !$scope.isEditable;
			$scope.isInputReady = true;
		}

		PersonSrvs.showAll().then(function(data){
			$scope.persons = data;
		});
	

		$scope.showDetails = function(index){
			$scope.messages = undefined;
			$scope.error_msg = undefined;
			PersonSrvs.getPerson(index).then(function(data){
				$scope.personsDetails = data;
			});
		};

		$scope.createForm = function(){
			$scope.isCreate = true;
			$scope.person={};
			console.log("clicked-->");
		};

		$scope.saveRecord = function(){
			console.log($scope.person)
			PersonSrvs.savePerson($scope.person).then(function(data){
				$scope.messages = " Data are updated successfully";
				console.log($scope.messages);
			},function(data){
				$scope.error_msg = " Unable to save data. Please try after sometime";
				console.log($scope.error_msg);
			})

			$scope.persons = PersonSrvs.showAll();
		}


		$scope.save = function(){
			$scope.isInputReady = false;
			$scope.isEditable = !$scope.isEditable;
			PersonSrvs.updatePerson($scope.personsDetails).then(function(data){
				$scope.messages = " Data are updated successfully";
				console.log($scope.messages);
			},function(data){
				$scope.error_msg = " Unable to save data. Please try after sometime";
				console.log($scope.error_msg);
			})
		}



	});

})()