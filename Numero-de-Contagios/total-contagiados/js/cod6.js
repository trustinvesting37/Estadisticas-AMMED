function getTask2(){
    let conjuntoRecu = JSON.parse(localStorage.getItem('recuperaciones'));
    let apendar = $("#mostrarRecuperacion");
    apendar.empty();

    for (let i = 0; i < conjuntoRecu.length; i++) {
        let nombre = conjuntoRecu[i].nombre;
        let apellido = conjuntoRecu[i].apellido;
        let cedula = conjuntoRecu[i].cedula;
        let genero = conjuntoRecu[i].genero;
        let edad = conjuntoRecu[i].edad;
        let año = conjuntoRecu[i].año;
        let estado = conjuntoRecu[i].estado;
        let tratamiento = conjuntoRecu[i].tratamiento;
        let conteo = i + 1;

        if(año==3 && genero == "Femenino"){

            apendar.append(`
                    <tr>
                        <td>`+conteo+`</td>
                        <td>`+nombre+`</td>
                        <td>`+apellido+`</td>
                        <td>`+edad+`</td>
                        <td>`+cedula+`</td>
                        <td>`+estado+`</td>
                        <td>`+tratamiento+`</td>
                       
                    </tr>
                       
            `
            );
        }
        
    };
    

}

getTask2();