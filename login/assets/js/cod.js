var user = $(".correo");
var pass = $(".pass");
var form = $(".formulario");

var username = "samuel@gmail.com",
    password = "samuel@gmail.com";







    form.on('submit', function(e){
    if(user.val()==username && pass.val() == password){
        window.location.replace("../Administrador/index.html");
        e.preventDefault();

    }else{
        user.addClass("is-invalid");
        pass.addClass("is-invalid");

        
    }
    e.preventDefault();
})