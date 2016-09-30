'use strict';
(function(window,angular){
angular.module('outlookApp')


.controller('inboxLayoutController',['$scope','$rootScope',function($scope,$rootScope){
	debugger;
	$rootScope.$watch('pagetitle',function(){
		$scope.title = $rootScope.pagetitle?$rootScope.pagetitle : 'outlook';
	})
}])

.directive('inboxLayout',function(){
	
	return{
		
		templateUrl : '/src/module/directive/inboxlayout/inbox.html',
		controller :  'inboxLayoutController'
	}
	
		
	
})

})(window,window.angular);