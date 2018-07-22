$(document).ready(function() {
    $.each( $( "#nav a" ), function( i, link ) {
        $( link ).delay( i * 100 ).fadeIn( 4000 );
    });

    
$(window).scroll(function(){
    $("#fade1").css("opacity", 1 - $(window).scrollTop() / 500);
  });
});