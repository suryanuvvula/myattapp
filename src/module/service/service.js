
'use strict';

(function(window,angular){
	
	function inboxService($http){
		var inboxSer = {};
		inboxSer.mailList = function(){
			return $http.get('src/module/service/inboxData.json')		
		}
		inboxSer.mailCompose = function(){
			return $http.post('src/module/service/inboxData.json')
		}
		inboxSer.getInbox = function(id){
			return $http.get('src/module/service/inboxData.json').then(function(response){
				for(var i=0;i<response.data.length;i++){
					if(response.data[i].id == id){
						return response.data[i];
					}
				}
			});
		}
		inboxSer.getDrafts = function(id){
			return $http.get('src/module/service/drafts.json').then(function(response){
				for(var i=0;i<response.data.length;i++){
					if(response.data[i].id == id){
						return response.data[i];
					}
				}
			});
		}
		inboxSer.draftsList = function(){
		   return $http.get('src/module/service/drafts.json')	
	   }
	   inboxSer.junkList = function(){
		   return $http.get('src/module/service/junk.json')	
	   }
	   inboxSer.getJunk = function(id){
			return $http.get('src/module/service/junk.json').then(function(response){
				for(var i=0;i<response.data.length;i++){
					if(response.data[i].id == id){
						return response.data[i];
					}
				}
			});
		}
		return inboxSer;
	}
	
	inboxService.$inject = ['$http'];
	
	angular.module('outlookApp').service('inboxService',inboxService);
	
})(window,window.angular);