//---------------------------------------         PRIMERA GRAFICA         ------------------------------------------



//---------------------------------------         TERCERA GRAFICA         ------------------------------------------

/* 
'FIEBRE AMARILLA', 'PALUDISMO O MALARIA', 'CISTITIS', 'PIELONEFRITIS','INFECCIONES DE PIEL Y PARTES BLANDAS (ABCESOS, CELULITIS, ERISIPELA, OTROS)', 'CHIKUNGUYA', 'ESCABIOSIS', 'PEDICULOSIS', 'PIE DE ATLETA', 'ONICOCRIPTOSIS (UÑA ENCARNADA)','LITIASIS RENAL', 'GASTRITIS', 'SÍNDROME DE INTESTINO IRRITABLE', 'CONJUNTIVITIS', 'OTITIS'

*/

let ctx3 = document.getElementById("myChart3").getContext("2d");
let myChart3 = new Chart(ctx3, {
    type: "bar",
    data:{
        labels:['LARINGOAMIGDALITIS','RINOSINUCITIS','RESFRIADO COMÚN', 'SARSCOV2 (COVID 19)', 'TUBERCULOSIS', 'NEUMONÍA', 'BRONQUITIS', 'HEPATITIS A', 'HEPATITIS B','HEPATITIS DE ETIOLOGÍA NO VIRAL', 'SÍNDROME DIARREÍCO', 'VIH', 'SÍFILIS', 'GONORREA', 'DENGUE'],
        datasets: [{
            label:'',
            data:[10,9,15,4,31,9,15,4,30,9,15,4,31,9,15,4,3],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options:{
        indexAxis: 'y',
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        },
        plugins:{
            legend:{
                labels:{
                    boxWidth: 0
                }
            }
        }
    }
})

//---------------------------------------         Cuarta GRAFICA         ------------------------------------------


let ctx4 = document.getElementById("myChart4").getContext("2d");
let myChart4 = new Chart(ctx4, {
    type: "bar",
    data:{
        labels:['FIEBRE AMARILLA', 'PALUDISMO O MALARIA', 'CISTITIS', 'PIELONEFRITIS','INFECCIONES DE PIEL Y PARTES BLANDAS ', 'CHIKUNGUYA', 'ESCABIOSIS', 'PEDICULOSIS', 'PIE DE ATLETA', 'ONICOCRIPTOSIS (UÑA ENCARNADA)','LITIASIS RENAL', 'GASTRITIS', 'SÍNDROME DE INTESTINO IRRITABLE', 'CONJUNTIVITIS', 'OTITIS'],
        datasets: [{
            label:'',
            data:[10,9,15,4,31,9,15,4,30,9,15,4,31,9,15,4,3],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options:{
        indexAxis: 'y',
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        },
        plugins:{
            legend:{
                labels:{
                    boxWidth: 0
                }
            }
        }
    }
})

