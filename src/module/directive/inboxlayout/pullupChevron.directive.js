(function(){

angular.module('outlookApp').directive('pullUpChevron',function(){
	return{
	scope:{},
	restrict:'AE',
	link : function(scope,elem,attrs){
		scope.myname = "surya";
		elem.bind('click',function(){
		if((elem).next().hasClass('slideUp')){
			(elem).next().removeClass('slideUp');
		}else{
		(elem).next().addClass('slideUp');
		console.log(attrs);
		}				
		});
	    scope.hideChevron = true;
		
	}
	};
	
	
});

})();