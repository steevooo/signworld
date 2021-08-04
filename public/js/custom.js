$( document ).ready(function() {
// user profile
    $("#chage-pwd-next").click(function(){
        $("#new-pwd").hide();
        $("#opt-pwd").show();
     });
});
$(window).on("scroll",function(){$(this).scrollTop()>300?$(".scroll-top-arrow").fadeIn("slow"):$(".scroll-top-arrow").fadeOut("3000"),$(window).scrollTop()<=0?$(".nav-coustom").removeClass("bg-dark"):$(".nav-coustom").addClass("bg-dark")}),$(document).on("click",".scroll-top-arrow",function(){return $("html, body").animate({scrollTop:0},800),!1});



