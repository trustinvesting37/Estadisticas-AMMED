let conjuntoRecu = JSON.parse(localStorage.getItem('recuperaciones'));
console.log(conjuntoRecu);


$(".enRecuperacion").attr("data-purecounter-end",Object.keys(conjuntoRecu).length);

//////////////////////////PRIMER AÑO///////////////////////////////////

function primero(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 1){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 1){
            conteoRecuF += 1;
        }
    }
    $(".primeroM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".primeroF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
primero();

//////////////////////////SEGUNDO AÑO///////////////////////////////////

function segundo(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 2){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 2){
            conteoRecuF += 1;
        }
    }
    $(".segundoM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".segundoF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
segundo();

//////////////////////////TERCER AÑO///////////////////////////////////

function tercero(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 3){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 3){
            conteoRecuF += 1;
        }
    }
    $(".terceroM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".terceroF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
tercero();

//////////////////////////QUINTO AÑO///////////////////////////////////

function cuarto(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 4){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 4){
            conteoRecuF += 1;
        }
    }
    $(".cuartoM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".cuartoF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
cuarto();

//////////////////////////QUINTO AÑO///////////////////////////////////

function quinto(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 5){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 5){
            conteoRecuF += 1;
        }
    }
    $(".quintoM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".quintoF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
quinto();

//////////////////////////SEXTO AÑO///////////////////////////////////

function sexto(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 6){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 6){
            conteoRecuF += 1;
        }
    }
    $(".sextoM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".sextoF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
sexto();

//////////////////////////PERSONAL CIVIL///////////////////////////////////

function civil(){
    var conteoRecuM = 0;
    var conteoRecuF = 0;
    for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
        
        if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == "PC"){
            conteoRecuM += 1;
        } 
        if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == "PC"){
            conteoRecuF += 1;
        }
    }
    $(".civilM").append(`<p class="num-con">`+conteoRecuM+`</p>`);
    $(".civilF").append(`<p class="num-con">`+conteoRecuF+`</p>`);  
}
civil();






