$(document).ready(function() {
    $.each( $( "#nav a" ), function( i, link ) {
        $( link ).delay( i * 300 ).fadeIn( 7000 );
    });

    
$(window).scroll(function(){
    $("#fade1").css("opacity", 1 - $(window).scrollTop() / 500);
  });



  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});



  
});

