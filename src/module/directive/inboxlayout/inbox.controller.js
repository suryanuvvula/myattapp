'use strict';

(function(window, angular) {

 function inboxCtrl($scope, $http, inboxService, $state, $window, $stateParams, $rootScope) {
  var model = this;
  model.myname = "surya";
  model.textAng = "myAngularText";
  model.showDescription = false;
  model.listItems = [{
   title: 'Inbox',
   url: 'dashboard.mail.list'
  }, {
   title: 'Junk',
   url: 'dashboard.mail.junk'
  }, {
   title: 'Drafts',
   url: 'dashboard.mail.drafts'
  }, {
   title: 'Sent Items',
   url: 'dashboard.mail.sentitems'
  }];

  model.mailDisplay = function() {
   $state.go('dashboard.mail.compose');

  }

  model.myMail = function(name, subject, content) {
   var mailData = {
    name: name,
    title: subject,
    description: content
   };
    $window.sessionStorage.setItem('mailData', JSON.stringify(mailData));
  $state.go('dashboard.mail.list');
  }

  model.displayItems = function(id,methodType) {
   switch (methodType) {
	   case 'inbox':
	         var inboxDetails =  inboxService.getInbox(id)
	         break;

       case 'junk': 
	          var inboxDetails = inboxService.getJunk(id)
			 break;
	   case 'drafts': 
	          var inboxDetails = inboxService.getDrafts(id)
			 break;	 
	   default:
	          var inboxDetails = inboxService.getInbox(id)
		     break;
   }
   
   $('li#inboxListItem').on('click', function() {
    $('li#inboxListItem').removeClass('active');
    $(this).addClass('active');
   })
   model.hideContent = false;
   model.listDescription = false;
   model.showLine = true;

   inboxDetails.then(function(data) {
    if (data != undefined) {
     model.mailList = data;

     $rootScope.pagetitle = data.title;
     model.showDescription = !model.showDescription;
    }
   })
  }


 




  model.listClass = function(title) {
   return {
    'mailClass': angular.lowercase(title) === 'angular',
    'angularClass': angular.lowercase(title) === 'angular app'
   }
  }
  model.listClass();

  model.showEmail = function() {
   model.hideContent = true;

  }
  model.deleteEmail = function() {
   $('#inboxListItem.active').remove();
   model.listDescription = true;
  }

  model.showTextBar = function(event) {
   //alert("showInpiut");
   event.preventDefault();
   model.showField = true;
   return false;
   //angular.element("#newfolder").replace("input[type]=text");
  }

  model.createNewFolder = function(event, showInput) {
   var keyCode = event.which || event.keyCode;
   if (keyCode === 13) {
    // Do that thing you finally wanted to do
    console.log(showInput);
    model.listItems.push(showInput);
   }
  }



 }

 inboxCtrl.$inject = ['$scope', '$http', 'inboxService', '$state', '$window', '$stateParams', '$rootScope'];

 angular.module('outlookApp')
  .controller('inboxCtrl', inboxCtrl)



})(window, window.angular);