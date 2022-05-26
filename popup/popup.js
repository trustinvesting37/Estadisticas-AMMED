var btnPopup = $("#btn-popup");
var overlay = $(".overlay");
var popup = $(".popup");
var close = $("#btn-cerrar-popup");

var llave = 125243;


btnPopup.on("click", function(){
    overlay.addClass("active");
    popup.addClass("active");

    
});

close.on("click", function(){
    overlay.removeClass("active");
    popup.removeClass("active");

});


$(window).on('click' , function(e){

    if(e.target.classList.contains("overlay") && overlay.hasClass("active") && popup.hasClass("active")){
        overlay.removeClass("active");
        popup.removeClass("active");
    }
})

$('.clave').on("focus", function(){
    $('.clave').css({"background":"white"})
})

$('.mod').on('click', function(e){
    if($('.clave').val() == llave){
        window.location.replace("login/index.html");
        e.preventDefault();

    }else{
        $(".clave").css({"background":"#ff060644"});
        
    }
})
/*
$(location).attr('href',ENLACE_WEB);
*/
