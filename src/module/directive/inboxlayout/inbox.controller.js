
'use strict';

(function(window,angular){

function inboxCtrl($scope,$http,inboxService,$state,$window,$stateParams,$rootScope){
	var model = this;
	model.myname = "surya";
	model.textAng = "myAngularText";
	model.showDescription = false;
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
	var inboxDetails = inboxService.get(id);
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
	
	
	
	
	
	model.mailDisplay = function(){
		$state.go('dashboard.mail.compose');
		
	}
	
	model.myMail = function(name,subject,content){
		var mailData = {
			name : name,
			title : subject,
			description : content
		};
		
	   $window.sessionStorage.setItem('mailData',JSON.stringify(mailData));
	   $state.go('dashboard.mail.list');
	   
	   
	
	}
	model.listClass = function(title){
		return {
			'mailClass' : angular.lowercase(title) === 'angular',
			'angularClass' : angular.lowercase(title) === 'angular app'
		}
	}
	model.listClass();
	
	model.showEmail = function(){
	    model.hideContent = true;
		
	}
	model.deleteEmail = function(){
		$('#inboxListItem.active').remove();
		model.listDescription = true;
	}
	
	model.showTextBar = function(event){
		//alert("showInpiut");
        event.preventDefault();
        model.showField = true; 
		return false;
		//angular.element("#newfolder").replace("input[type]=text");
	}

	model.createNewFolder = function(event,showInput){
		var keyCode = event.which || event.keyCode;
    if (keyCode === 13) {
        // Do that thing you finally wanted to do
		console.log(showInput);
	}
	}
	
	
	
}

inboxCtrl.$inject = ['$scope','$http','inboxService','$state','$window','$stateParams','$rootScope'];

angular.module('outlookApp')
.controller('inboxCtrl',inboxCtrl)



})(window,window.angular);

