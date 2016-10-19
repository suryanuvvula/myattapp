
'use strict';

(function(window,angular){
	
	function inboxService($http){
		var inboxSer = {};
		inboxSer.mailList = function(){
			return $http.get('src/module/service/inboxData.json')		
		}
		return inboxSer;
	}
	
	inboxService.$inject = ['$http'];
	
	angular.module('outlookApp').service('inboxService',inboxService);
	
})(window,window.angular);