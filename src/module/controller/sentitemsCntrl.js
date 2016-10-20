'use strict';

(function(){

    function sentitemsCntrl($scope,$http,inboxService,$state,$window,$stateParams,$rootScope){
  var model = this;
                 model.inboxDisplay = function(){
		
		var mail = inboxService.mailList();
		mail.then(function(response){
			var mailData = angular.fromJson($window.sessionStorage.getItem('mailData'));
			//mailData = JSON.parse(mailData);
			if(mailData){
			var inboxResponse = response.data;
			inboxResponse.push(mailData);
			   
			}
		/*	if(mailData['title'] == "angular"){
				model.myAngular = true;
			}*/
			else{
				var inboxResponse = response.data;
			}
			model.inboxData = inboxResponse;
			
			
			
		});
}
       model.inboxDisplay();
    }

    sentitemsCntrl.$inject = ['$scope','$http','inboxService','$state','$window','$stateParams','$rootScope'];

    angular.module('outlookApp').controller('sentitemsCntrl',sentitemsCntrl);
})()