'use strict';

(function(window,angular){

    function inbxController($scope,$http,inboxService,$state,$window,$stateParams,$rootScope){
        var model = this;
        model.myVar = "angulat";
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

       model.displayItems = function(id){
	var inboxDetails = inboxService.getInbox(id);
	$('li#inboxListItem').on('click',function(){
		$('li#inboxListItem').removeClass('active');
		$(this).addClass('active');
	})
	model.hideContent = false;
	model.listDescription = false;
	model.showLine = true;

	inboxDetails.then(function(data){
		if(data != undefined){
		model.mailList = data;
		
		$rootScope.pagetitle = data.title;
		model.showDescription = !model.showDescription;
		}
	})
	}
    }

    inbxController.$inject = ['$scope','$http','inboxService','$state','$window','$stateParams','$rootScope'];

angular.module('outlookApp')
.controller('inbxController',inbxController)



})(window,window.angular);