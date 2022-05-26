let conjuntoRecu = JSON.parse(localStorage.getItem('recuperaciones'));
let conjuntoRecuperados = JSON.parse(localStorage.getItem('recuperados'));

$(".enRecuperacion").attr("data-purecounter-end",Object.keys(conjuntoRecu).length);



//////////////////////////PRIMER AÑO///////////////////////////////////

var conteoRecuM = 0;
var conteoRecuF = 0;
var conteoRecuperadosM = 0;
var conteoRecuperadosF = 0;
var totalM;
var totalF;
var totalaño;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 1){
        conteoRecuM += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 1){
        conteoRecuF += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 1){
        conteoRecuperadosM += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 1){
        conteoRecuperadosF += 1;
    }
}
totalM = conteoRecuperadosM + conteoRecuM;
totalF = conteoRecuperadosF + conteoRecuF;
totalaño = totalM + totalF;
$(".primeroMF").attr("data-purecounter-end",totalaño);


//////////////////////////Segundo AÑO///////////////////////////////////

var conteoRecuM2 = 0;
var conteoRecuF2 = 0;
var conteoRecuperadosM2 = 0;
var conteoRecuperadosF2 = 0;
var totalM2;
var totalF2;
var totalaño2;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 2){
        conteoRecuM2 += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 2){
        conteoRecuF2 += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 2){
        conteoRecuperadosM2 += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 2){
        conteoRecuperadosF2 += 1;
    }
}
totalM2 = conteoRecuperadosM2 + conteoRecuM2;
totalF2 = conteoRecuperadosF2 + conteoRecuF2;
totalaño2 = totalM2 + totalF2;
$(".segundoMF").attr("data-purecounter-end",totalaño2);

//////////////////////////Tercero AÑO///////////////////////////////////

var conteoRecuM3 = 0;
var conteoRecuF3 = 0;
var conteoRecuperadosM3 = 0;
var conteoRecuperadosF3 = 0;
var totalM3;
var totalF3;
var totalaño3;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 3){
        conteoRecuM3 += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 3){
        conteoRecuF3 += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 3){
        conteoRecuperadosM3 += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 3){
        conteoRecuperadosF3 += 1;
    }
}
totalM3 = conteoRecuperadosM3 + conteoRecuM3;
totalF3 = conteoRecuperadosF3 + conteoRecuF3;
totalaño3 = totalM3 + totalF3;
$(".terceroMF").attr("data-purecounter-end",totalaño3);

//////////////////////////Cuarto AÑO///////////////////////////////////

var conteoRecuM4 = 0;
var conteoRecuF4 = 0;
var conteoRecuperadosM4 = 0;
var conteoRecuperadosF4 = 0;
var totalM4;
var totalF4;
var totalaño4;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 4){
        conteoRecuM4 += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 4){
        conteoRecuF4 += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 4){
        conteoRecuperadosM4 += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 4){
        conteoRecuperadosF4 += 1;
    }
}
totalM4 = conteoRecuperadosM4 + conteoRecuM4;
totalF4 = conteoRecuperadosF4 + conteoRecuF4;
totalaño4 = totalM4 + totalF4;
$(".cuartoMF").attr("data-purecounter-end",totalaño4);

//////////////////////////Quinto AÑO///////////////////////////////////

var conteoRecuM5 = 0;
var conteoRecuF5 = 0;
var conteoRecuperadosM5 = 0;
var conteoRecuperadosF5 = 0;
var totalM5;
var totalF5;
var totalaño5;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 5){
        conteoRecuM5 += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 5){
        conteoRecuF5 += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 5){
        conteoRecuperadosM5 += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 5){
        conteoRecuperadosF5 += 1;
    }
}
totalM5 = conteoRecuperadosM5 + conteoRecuM5;
totalF5 = conteoRecuperadosF5 + conteoRecuF5;
totalaño5 = totalM5 + totalF5;
$(".quintoMF").attr("data-purecounter-end",totalaño5);


//////////////////////////SEXTO AÑO///////////////////////////////////

var conteoRecuM6 = 0;
var conteoRecuF6 = 0;
var conteoRecuperadosM6 = 0;
var conteoRecuperadosF6 = 0;
var totalM6;
var totalF6;
var totalaño6;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == 6){
        conteoRecuM6 += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == 6){
        conteoRecuF6 += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == 6){
        conteoRecuperadosM6 += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == 6){
        conteoRecuperadosF6 += 1;
    }
}
totalM6 = conteoRecuperadosM6 + conteoRecuM6;
totalF6 = conteoRecuperadosF6 + conteoRecuF6;
totalaño6 = totalM6 + totalF6;
$(".sextoMF").attr("data-purecounter-end",totalaño6);

//////////////////////////SEXTO AÑO///////////////////////////////////

var conteoRecuMPC = 0;
var conteoRecuFPC = 0;
var conteoRecuperadosMPC = 0;
var conteoRecuperadosFPC = 0;
var totalMPC;
var totalFPC;
var totalañoPC;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == "PC"){
        conteoRecuMPC += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == "PC"){
        conteoRecuFPC += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == "PC"){
        conteoRecuperadosMPC += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == "PC"){
        conteoRecuperadosFPC += 1;
    }
}
totalMPC = conteoRecuperadosMPC + conteoRecuMPC;
totalFPC = conteoRecuperadosFPC + conteoRecuFPC;
totalañoPC = totalMPC + totalFPC;
$(".personalC").attr("data-purecounter-end",totalañoPC);

//////////////////////////SEXTO AÑO///////////////////////////////////

var conteoRecuMPM = 0;
var conteoRecuFPM = 0;
var conteoRecuperadosMPM = 0;
var conteoRecuperadosFPM = 0;
var totalMPM;
var totalFPM;
var totalañoPM;
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecu[i].genero == "Masculino" && conjuntoRecu[i].año == "PM"){
        conteoRecuMPM += 1;
    } 
    if(conjuntoRecu[i].genero == "Femenino" && conjuntoRecu[i].año == "PM"){
        conteoRecuFPM += 1;
    }
}
for (let i = 0; i < Object.keys(conjuntoRecu).length; i++) {
    
    if(conjuntoRecuperados[i].genero == "Masculino" && conjuntoRecuperados[i].año == "PM"){
        conteoRecuperadosMPM += 1;
    } 
    if(conjuntoRecuperados[i].genero == "Femenino" && conjuntoRecuperados[i].año == "PM"){
        conteoRecuperadosFPM += 1;
    }
}
totalMPM = conteoRecuperadosMPM + conteoRecuMPM;
totalFPM = conteoRecuperadosFPM + conteoRecuFPM;
totalañoPM = totalMPM + totalFPM;
$(".personalM").attr("data-purecounter-end",totalañoPM);



console.log(conteoRecuM4);
