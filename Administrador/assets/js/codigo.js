 $(document).ready(function(){
   
    $("html, body").animate({
        scrollTop: 0
    });
   ////////////////////////////////SECCION DE TABLA//////////////////////////////////////

    var cont1 = $(".div1");
    var cont2 = $(".div2");
    var    cont3 = $(".div3");
    var    cont4 = $(".div4");
    var    cont5 = $(".div5");
    var    sec1 = $(".sec1");
    var    sec2 = $(".sec2");
    var    sec3 = $(".sec3");
    var    sec4 = $(".sec4");
    var    sec5 = $(".sec5");

    var btn1 = $(".btn-vac"),
        btn2 = $(".btn-recu"),
        btn3 = $(".btn-alta"),
        btn4 = $(".btn-fa"),
        btn5 = $(".btn-not"),
        form1 = $(".form1"),
        form2 = $(".form2"),
        form3 = $(".form3"),
        form4 = $(".form4"),
        form5 = $(".form5");


    

        sec1.on("click", function(){

            form2.hide();
            form3.hide();
            form4.hide();
            form5.hide();
            cont2.hide();
            cont3.hide();
            cont4.hide();
            cont5.hide();
            cont1.show("slow", function(){
         
               
                $("html, body").animate({
                    scrollTop: 400
                }); 
               
 
            });
        });

        sec2.on("click", function(){

            form1.hide();
            form3.hide();
            form4.hide();
            form5.hide();
            cont1.hide();
            cont3.hide();
            cont4.hide();
            cont5.hide();
            cont2.show("slow", function(){
        
                
                $("html, body").animate({
                    scrollTop: 400
                }); 
            });
        });

        sec3.on("click", function(){
            form2.hide();
            form1.hide();
            form4.hide();
            form5.hide();
            cont1.hide();
            cont2.hide();
            cont4.hide();
            cont5.hide();
            cont3.show("slow", function(){
         
                cont2.css("transform","translate(0%)");
                $("html, body").animate({
                    scrollTop: 400
                }); 
                
            });
        })

        sec4.on("click", function(){


            form2.hide();
            form3.hide();
            form1.hide();
            form5.hide();
            cont1.hide();
            cont2.hide();
            cont3.hide();
            cont5.hide();
            cont4.show("slow", function(){
                cont2.css("transform","translate(0%)");
                $("html, body").animate({
                    scrollTop: 400
                }); 
            });
        })

        sec5.on("click", function(){

            form2.hide();
            form3.hide();
            form4.hide();
            form1.hide();
            cont1.hide();
            cont2.hide();
            cont3.hide();
            cont4.hide();
            cont5.show("slow", function(){
                cont5.css("transform","translate(0%)");

                $("html, body").animate({
                    scrollTop: 400
                }); 
            });
        })

        //////////////////////////////SECCION DE FORMULARIOS///////////////////////////////////

    


        btn1.on("click", function(){
            
            
      

            form5.hide();
            form2.hide();
            form3.hide();
            form4.hide();
            form1.show("slow", function(){
                $("html, body").animate({
                    scrollTop: 1000
                });  
         
              
 
            });
        });

        btn2.on("click", function(){

      

            form1.hide();
            form3.hide();
            form4.hide();
            form5.hide();
            form2.show("slow", function(){
                $("html, body").animate({
                    scrollTop: 1000
                });  
        
               
            });
        });

        btn3.on("click", function(){


            form1.hide();
            form2.hide();
            form4.hide();
            form5.hide();
            form3.show("slow", function(){
         
                $("html, body").animate({
                    scrollTop: 1000
                });  
               
                
            });
        })

        btn4.on("click", function(){

 

            form1.hide();
            form2.hide();
            form3.hide();
            form5.hide();
            form4.show("slow", function(){
                $("html, body").animate({
                    scrollTop: 1000
                });  ;
    
            });
        })

        btn5.on("click", function(){

              

            form1.hide();
            form2.hide();
            form3.hide();
            form4.hide();
            form5.show("slow", function(){
                $("html, body").animate({
                    scrollTop: 1000
                });  
            });
        })


        

 
    

});

/*
for (let e = 0; e < conjuntoVac.length; e=e+5) {

            for (let i = e + 1; i < e + 5 ; i++) {
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
                                <i class="icon-edit"></i>
                                <i class="icon-trash"></i>
                            </td>
                        </tr>
                `
                );
                
            }
 */