
'use strict';

(function(window,angular){
	
	function inboxCtrl($scope,$http,inboxService,$state,$window){
		var model = this;
		model.myname = "surya";
		model.textAng = "myAngularText";
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
		
		model.myFunc = function(){
			alert('hello');
		}
		
		
		
	}
	
	inboxCtrl.$inject = ['$scope','$http','inboxService','$state','$window'];
	
	angular.module('outlookApp')
	.controller('inboxCtrl',inboxCtrl)
	
	
	
})(window,window.angular);