'use strict';
(function(window,angular){
	angular.module('outlookApp')
	
	.directive('inboxLayout',function(){
		
		return{
			templateUrl : '/src/module/directive/inboxlayout/inbox.html'
		}
	})
	
})(window,window.angular);