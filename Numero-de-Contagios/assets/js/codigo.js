//---------------------------------------         PRIMERA GRAFICA         ------------------------------------------



//---------------------------------------         TERCERA GRAFICA         ------------------------------------------

/* 
'FIEBRE AMARILLA', 'PALUDISMO O MALARIA', 'CISTITIS', 'PIELONEFRITIS','INFECCIONES DE PIEL Y PARTES BLANDAS (ABCESOS, CELULITIS, ERISIPELA, OTROS)', 'CHIKUNGUYA', 'ESCABIOSIS', 'PEDICULOSIS', 'PIE DE ATLETA', 'ONICOCRIPTOSIS (UÑA ENCARNADA)','LITIASIS RENAL', 'GASTRITIS', 'SÍNDROME DE INTESTINO IRRITABLE', 'CONJUNTIVITIS', 'OTITIS'

*/

let ctx3 = document.getElementById("myChart3").getContext("2d");
let myChart3 = new Chart(ctx3, {
    type: "bar",
    data:{
        labels:[
            'ALOPECIA',
            'NEUMONIA',
            'OTITIS',
            'CONJUNTIVITIS',
            'DENGUE',
            'SINDROME INTESTINO IRRITABLE',
            'VARICELA ZOSTER',
            'PAROTIDITIS',
            'ONICOCRIPTOSIS',
            'PIE DE ATLETA',
            'HEPATITIS A',
            'RINOSINUSITIS',
        ],
        datasets: [{
            label:'',
            data:[3,10,4,5,2,4,1,1,10,15,8,7],
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
        labels:['INFECCION DE PIEL Y PARTES BLANDAS',
        'LITIASIS RENAL',
        'SINDROME DIARREICO',
        'BRONQUITIS',
        'SARS COV2',
        'RESFRIADO COMUN',
        'CISTITIS',
        'ESCABIOSIS',
        'LARINGOAMIGDALITIS',
        'GASTRITIS',
        'PIELONEFRITIS'
        ],
        datasets: [{
            label:'',
            data:[13,6,21,9,36,57,7,4,3,9,3],
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

