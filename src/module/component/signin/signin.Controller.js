'use strict';
(function(window,angular){
	function myCtrl($scope,$rootScope,$http,$state){
		
		var model = this;
		model.name = "surya";
		$rootScope.names = "teja";
		model.signinForm = function(email,password){
			$http.get('/src/module/component/signin/signin.json').then(function(response){
				var signin = response.data.message;
				console.log(signin);
		        $state.go('dashboard.mail.list');
			})
		}
		
	}
	myCtrl.$inject = ['$scope','$rootScope','$http','$state'];
	
	angular.module('outlookApp')
	
	
	.controller('myCtrl',myCtrl);
	
	
	
	
	
})(window,window.angular);