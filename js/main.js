$(document).ready(function() {
    // Navbar Shrink
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    // Video-Popup
    const VideoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src", VideoSrc);
            }
        }
    });
// Features Carousel
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
               
            },
            1000: {
                items: 3,
            }
        }
    });
    // Screenshots Carousel
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
               
            },
            1000: {
                items: 4,
            }
        }
    });
// Testimonials Carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
               
            },
            1000: {
                items: 3,
            }
        }
    });
// Team Carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
               
            },
            1000: {
                items: 4,
            }
        }
    });
// Call Scroll
$.scrollIt({
    topOffset: -50
});
});