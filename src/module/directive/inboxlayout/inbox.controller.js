
'use strict';

(function(window,angular){
	
	function inboxCtrl($scope,$http){
		var model = this;
		model.myname = "surya";
		model.inboxDisplay = function(){
			alert('Inbox alert');
			
			$http.get('src/module/service/inboxData.json').then(function(response){
				
				var inboxResponse = response.data;
				debugger;
				model.inboxData = inboxResponse;
				console.log(model.inboxData);
				
			});
			
		}
		 $scope.$watch(
                    "model.inboxData",
                    function( newValue, oldValue ) {
                        console.log( "Value is printed" );
                    }
                );
		
	}
	
	inboxCtrl.$inject = ['$scope','$http'];
	
	angular.module('outlookApp')
	
	.controller('inboxCtrl',inboxCtrl);
	
	/*angular.module('outlookApp')
	
	.controller('inboxCtrl',['$scope','$http',function inboxCtrl($scope,$http){
		$scope.inboxDisplay = function(){
			alert('Inbox alert');
			$http.get('src/module/service/inboxData.json').then(function(response){
				var inboxData;
				$scope.inboxData = response.data;
				console.log(inboxData);
				
			});
			
		}
	}]);*/
	
})(window,window.angular);