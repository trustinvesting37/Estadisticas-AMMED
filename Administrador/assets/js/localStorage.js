
    var form1 = $(".form1");
    var form2 = $(".form2");
    var form3 = $(".form3");
    var form4 = $(".form4"); 
    var form5 = $(".form5");

    form1.on("submit", saveTask)
    function saveTask(e){

        let nombre = $(".nombre1").val(),
            apellido = $(".apellido1").val(),
            genero = $(".genero1").val(),
            año = $(".año1").val();


            const vacunado = {
                nombre,
                apellido,
                genero,
                año
            };
            if(localStorage.getItem('vacunados') === null){
                let vacunados = [];
                vacunados.push(vacunado);
                localStorage.setItem('vacunados', JSON.stringify(vacunados));

            }else{
                let vacunados = JSON.parse(localStorage.getItem('vacunados'));
                vacunados.push(vacunado);
                localStorage.setItem('vacunados', JSON.stringify(vacunados));
            }

        getTask()
        form1.reset();
        e.preventDefault();
        
    }
    function getTask(){
        let conjuntoVac = JSON.parse(localStorage.getItem('vacunados'));
        let apendar = $("#mostrarVacunados");
        apendar.empty();

        for (let i = 0; i < conjuntoVac.length; i++) {
            let nombre = conjuntoVac[i].nombre;
            let apellido = conjuntoVac[i].apellido;
            let genero = conjuntoVac[i].genero;
            let año = conjuntoVac[i].año;
            let conteo = i + 1;
            apendar.append(`
                    <tr>
                        <td>`+conteo+`</td>
                        <td>`+nombre+`</td>
                        <td>`+apellido+`</td>
                        <td>`+genero+`</td>
                        <td>`+año+`</td>
                        <td>
                            <a><i class="icon-edit"></i></a>
                            <a onClick="deleteTask('`+nombre+`')"><i class="icon-trash" ></i></a>
                        </td>
                    </tr>
            `
            );
            
        };
        

    }
    function deleteTask(nombre) {
        let vacunados = JSON.parse(localStorage.getItem('vacunados'));
        for (let i = 0; i < vacunados.length; i++) {
          if(vacunados[i].nombre == nombre){
            vacunados.splice(i , 1);
          }
          
        }
        localStorage.setItem('vacunados',JSON.stringify(vacunados));
        getTask();
    }
    getTask()
    
    
    form2.on("submit", saveTask2)
    function saveTask2(e){

        let nombre = $(".nombre2").val(),
            apellido = $(".apellido2").val(),
            cedula = $(".cedula2").val(),
            genero = $(".genero2").val(),
            edad = $(".edad2").val(),
            año = $(".año2").val(),
            estado = $(".estado2").val(),
            tratamiento = $(".tratamiento2").val();


            const recuperacion = {
                nombre,
                apellido,
                cedula,
                genero,
                edad,
                año,
                estado,
                tratamiento
            };
            if(localStorage.getItem('recuperaciones') === null){
                let recuperaciones = [];
                recuperaciones.push(recuperacion);
                localStorage.setItem('recuperaciones', JSON.stringify(recuperaciones));

            }else{
                let recuperaciones = JSON.parse(localStorage.getItem('recuperaciones'));
                recuperaciones.push(recuperacion);
                localStorage.setItem('recuperaciones', JSON.stringify(recuperaciones));
            }

        getTask2()
        form2.reset();
        e.preventDefault();
        
    }
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
            apendar.append(`
                    <tr>
                        <td>`+conteo+`</td>
                        <td>`+nombre+`</td>
                        <td>`+apellido+`</td>
                        <td>`+genero+`</td>
                        <td>`+edad+`</td>
                        <td>`+año+`</td>
                        <td>`+cedula+`</td>
                        <td>`+estado+`</td>
                        <td>`+tratamiento+`</td>
                        <td>
                            <a><i class="icon-edit"></i></a>
                            <a onClick="deleteTask2('`+nombre+`')"><i class="icon-trash" ></i></a>
                        </td>
                        <td>
                            <i class="fas icon-user-times"></i>
                            <i class="fas icon-plus"></i>
                        </td>
                    </tr>
                       
            `
            );
            
        };
        

    }
    function deleteTask2(nombre) {
        let recuperaciones = JSON.parse(localStorage.getItem('recuperaciones'));
        for (let i = 0; i < recuperaciones.length; i++) {
          if(recuperaciones[i].nombre == nombre){
            recuperaciones.splice(i , 1);
          }
          
        }
        localStorage.setItem('recuperaciones',JSON.stringify(recuperaciones));
        getTask2();
    }
    getTask2()


    form3.on("submit", saveTask3)
    
    function saveTask3(e){

        let nombre = $(".nombre3").val(),
            apellido = $(".apellido3").val(),
            cedula = $(".cedula3").val(),
            genero = $(".genero3").val(),
            edad = $(".edad3").val(),
            año = $(".año3").val(),
            estado = $(".estado3").val();
            


            const recuperado = {
                nombre,
                apellido,
                cedula,
                genero,
                edad,
                año,
                estado
            };
            if(localStorage.getItem('recuperados') === null){
                let recuperados = [];
                recuperados.push(recuperado);
                localStorage.setItem('recuperados', JSON.stringify(recuperados));

            }else{
                let recuperados = JSON.parse(localStorage.getItem('recuperados'));
                recuperados.push(recuperado);
                localStorage.setItem('recuperados', JSON.stringify(recuperados));
            }

        getTask3()
        form3.reset();
        e.preventDefault();
        
    }
    function getTask3(){
        let conjuntoRecuperados = JSON.parse(localStorage.getItem('recuperados'));
        let apendar = $("#mostrarRecuperados");
        apendar.empty();

        for (let i = 0; i < conjuntoRecuperados.length; i++) {
            let nombre = conjuntoRecuperados[i].nombre;
            let apellido = conjuntoRecuperados[i].apellido;
            let cedula = conjuntoRecuperados[i].cedula;
            let genero = conjuntoRecuperados[i].genero;
            let edad = conjuntoRecuperados[i].edad;
            let año = conjuntoRecuperados[i].año;
            let estado = conjuntoRecuperados[i].estado;
            let conteo = i + 1;
            apendar.append(`
                    <tr>
                        <td>`+conteo+`</td>
                        <td>`+nombre+`</td>
                        <td>`+apellido+`</td>
                        <td>`+año+`</td>
                        <td>`+genero+`</td>
                        <td>`+edad+`</td>
                        <td>`+cedula+`</td>
                        <td>`+estado+`</td>
                        <td>
                            
                            <a><i class="icon-edit"></i></a>
                            <a onClick="deleteTask3('`+nombre+`')"><i class="icon-trash" ></i></a>
                        </td>
                    </tr>

                   
            `
            );
            
        };
        

    }
    function deleteTask3(nombre) {
        let recuperados = JSON.parse(localStorage.getItem('recuperados'));
        for (let i = 0; i < recuperados.length; i++) {
          if(recuperados[i].nombre == nombre){
            recuperados.splice(i , 1);
          }
          
        }
        localStorage.setItem('recuperados',JSON.stringify(recuperados));
        getTask3();
    }
    
    getTask3()




    form4.on("submit", saveTask4)
    
    function saveTask4(e){

        let nombre = $(".nombre4").val(),
            apellido = $(".apellido4").val(),
            cedula = $(".cedula4").val(),
            genero = $(".genero4").val(),
            edad = $(".edad4").val(),
            año = $(".año4").val();
            
            


            const fallecido = {
                nombre,
                apellido,
                cedula,
                genero,
                edad,
                año
           
            };
            if(localStorage.getItem('fallecidos') === null){
                let fallecidos = [];
                fallecidos.push(fallecido);
                localStorage.setItem('fallecidos', JSON.stringify(fallecidos));

            }else{
                let fallecidos = JSON.parse(localStorage.getItem('fallecidos'));
                fallecidos.push(fallecido);
                localStorage.setItem('fallecidos', JSON.stringify(fallecidos));
            }

        getTask4()
        form4.reset();
        e.preventDefault();
        
    }

    function getTask4(){
        let conjuntoFa = JSON.parse(localStorage.getItem('fallecidos'));
        let apendar = $("#mostrarFallecidos");
        apendar.empty();

        for (let i = 0; i < conjuntoFa.length; i++) {
            let nombre = conjuntoFa[i].nombre;
            let apellido = conjuntoFa[i].apellido;
            let cedula = conjuntoFa[i].cedula;
            let genero = conjuntoFa[i].genero;
            let edad = conjuntoFa[i].edad;
            let año = conjuntoFa[i].año;
            let conteo = i + 1;
            apendar.append(`
                    <tr>
                        <td>`+conteo+`</td>
                        <td>`+nombre+`</td>
                        <td>`+apellido+`</td>
                        <td>`+genero+`</td>
                        <td>`+edad+`</td>
                        <td>`+cedula+`</td>
                        <td>
                            <a><i class="icon-edit"></i></a>
                            <a onClick="deleteTask4('`+nombre+`')"><i class="icon-trash" ></i></a>
                        </td>
                    </tr>

                   
                   
            `
            );
            
        };
        

    }

    function deleteTask4(nombre) {
        let fallecidos = JSON.parse(localStorage.getItem('fallecidos'));
        for (let i = 0; i < fallecidos.length; i++) {
          if(fallecidos[i].nombre == nombre){
            fallecidos.splice(i , 1);
          }
          
        }
        localStorage.setItem('fallecidos',JSON.stringify(fallecidos));
        getTask4();
    }
    
    
    
    getTask4()




/*
$(".alante").on("click", function(){

           
            for (let e = i+1; e <= i + 5; e++) {

                
                    let nombre = conjuntoVac[e].nombre;
                    let apellido = conjuntoVac[e].apellido;
                    let genero = conjuntoVac[e].genero;
                    let año = conjuntoVac[e].año;
                    let conteo = e;
                    apendar.append(`
                            <tr>
                                <td>`+conteo+`</td>
                                <td>`+nombre+`</td>
                                <td>`+apellido+`</td>
                                <td>`+genero+`</td>
                                <td>`+año+`</td>
                                <td>
                                    <i class="icon-edit"></i>
                                    <i class="icon-trash"></i>
                                </td>
                            </tr>
                    `
                    );
                    
                

            }
        })
*/