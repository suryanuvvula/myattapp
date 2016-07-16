
'use strict';

(function(window,angular){
	
	function inboxCtrl($scope,$http){
		var model = this;
		model.myname = "surya";
		model.inboxDisplay = function(){
			$http.get('src/module/service/inboxData.json').then(function(response){	
				var inboxResponse = response.data;
				model.inboxData = inboxResponse;		
			});
			
		}
		model.inboxDisplay();
		
	}
	
	inboxCtrl.$inject = ['$scope','$http'];
	
	angular.module('outlookApp')
	.controller('inboxCtrl',inboxCtrl);
})(window,window.angular);