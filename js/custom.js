function checkPending(){
	$.ajax({
		url: "php/ser.php"
	}).done(function(data) {
	  console.log(data);
	}).error(function(xhr,status,err){
		console.warn(xhr);
		console.log(err);
	});
}
   $(document).ready(function(){
		$("#sidenav").load( "sidenav.html",function(){
			$(".button-collapse").sideNav();
			$("a[href^='"+window.location.href.split('/').pop()+"']").hide();
		});
		//inital check
		$.ajax({
				url: "https://jsonplaceholder.typicode.com/posts/" //"php/ser.php"
			}).done(function(data) {
				//console.log(data);
				var topNotificationsHTML =''
				$.each(data,function(i,j){
					if(i<10){
						console.log(j);
						topNotificationsHTML +="<div style='padding-left:10px' class='card horizontal waves-effect waves-grey'><p>"+j.body+"</p></div>";
						$("#topNotifications").html(topNotificationsHTML);
						$("#loadHome").html('Load More');
					}
				})
			}).error(function(xhr,status,err){
				$("#topNotifications").html("<h3>Network error :(</h3>");
				$("#loadHome").html('Retry');
				console.warn(xhr);
				console.warn(err);
			});
			
		//periodic check for pending notification
		//var checkPendingNotifications = setInterval(checkPending,2000)
	});
