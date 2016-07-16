'use strict';
(function(window,angular){
	angular.module('outlookApp',[
	'ui.router',
	'ui.bootstrap'
	
	])
	
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/signin');
		$stateProvider
		.state('dashboard',{
			url : '/dashboard',
			views : {
				'header': {
					templateUrl : '/src/module/component/header/header.html'
				},
				'mainContainer' : {
					templateUrl : '/src/module/component/layout/mainlayout.html'
				},
				'footer' : {
					templateUrl : '/src/module/component/footer/footer.html'
				}
			
			}
		})
		
		.state('dashboard.mail',{
			url : '/mail',
			abstract : true , 
			templateUrl : '/src/module/template/mail.html'
		})
		
		.state('dashboard.mail.list',{
			url : '/inbox',
			templateUrl : '/src/module/template/mail.list.html'
		})
		
		.state('dashboard.mail.junk',{
			url : '/junk',
			templateUrl : '/src/module/template/mail.junk.html'
		})
		
		.state('dashboard.mail.drafts',{
			url : '/drafts',
			templateUrl : '/src/module/template/mail.drafts.html'
		})
		
		.state('dashboard.mail.sentitems',{
			url : '/sentitems',
			templateUrl : '/src/module/template/mail.sentitems.html'
		})
		
		.state('dashboard.mail.deleteditems',{
			url : '/deleteditems',
			templateUrl : '/src/module/template/mail.deleteditems.html'
		})
		
		.state('signin',{
			url: '/signin',
			views : {
				'mainContainer' : {
					templateUrl : '/src/module/component/signin/signin.html'
					
				}
			}
		})
		
	}])
	
	/*.controller('myCtrl',['$scope',function($scope){
		  $scope.name = "Myapp";
		  $scope.fullname = [
		  {
			  firstname : "Surya",
			  lastname : "Nuvvula"
		  },
		  {
			  firstname : "John",
			  lastname : "Doe"
		  }]
		  
		  $scope.skypeexe = function(){
                   
						alert("Skype button is pressed");
					
				}
		
	}]);*/

	
})(window,window.angular);
