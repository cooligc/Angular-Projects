(function(){

	var modules = angular.module("people");
	modules.service("PersonSrvs",function($http){
		var self = this;
		self.showAll = function(){
			var promise1 = $http.get('http://localhost:3000/peoples')
			var promise2 = promise1.then(function(response){
				return response.data;
			});
			return promise2;
		};

		self.getPerson = function(index){
			var promise1 = $http.get('http://localhost:3000/peoples/'+(index+1));
			var promise2 = promise1.then(function(response){
				return response.data;
			});
			return promise2;
		}

		self.updatePerson = function(params){
			return $http.put('http://localhost:3000/peoples/'+params.id,params);
		}

		self.savePerson = function(params){
			params.url="https://randomuser.me/api/portraits/med/men/"+Math.random().toFixed(2)*100+".jpg";

			return $http.post('http://localhost:3000/peoples/',params);
		}

	});

	modules.factory('myModal', function (vModal) {
      return vModal({
        controller: 'MyModalController',
        controllerAs: 'myModalCtrl',
        templateUrl: 'static/person/create.html'
      });
    })

})()