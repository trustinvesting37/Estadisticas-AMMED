

//---------------------------------------         Sexta GRAFICA         ------------------------------------------

let ctx6 = document.getElementById("myChart6").getContext("2d");
let myChart6 = new Chart(ctx6, {
    type: "bar",
    data:{
        labels:['FIEBRE',
            'DIFAGIA (DOLOR AL TRAGAR)',
            'HALITOSIS',
            'AMIGDALAS AGRANDADAS, ENROJECIDAS O CON EXSUDADO PURULENTO',
            'ADENOMEGALIA (GANGLIOS INFLAMADOS)',
            'CONGESTIÓN NASAL',
            'TUMEFACCIÓN FASCIAL A NIVEL DE MEJILLA (INFLAMACIÓN O SENSACIÓN DE PRESIÓN FASCIAL)',
            'ENROJECIMIENTO DE LOS OJOS',
            'OTALGIA',
            'OTORREA',
            'TOS',
            'DISNEA',
            'MIALGIA (DOLOR MUSCULAR)',
            'ARTRALGIA (DOLOR EN ARTICULACIONES)',
            'ESCALOFRIO (TEMBLORES)',
            'DOLOR DE GARGANTA'
        ],
       
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


//---------------------------------------         Septima GRAFICA         ------------------------------------------

let ctx7 = document.getElementById("myChart7").getContext("2d");
let myChart7 = new Chart(ctx7, {
    type: "bar",
    data:{
        labels:[
            'RINORREA ANTERIOR O POSTERIOR (GOTEO NASAL)',
            'CEFALEA',
            'DOLOR TORÁCICO',
            'NAUSEAS',
            'VÓMITOS',
            'DIARREA',
            'SARPULLIDO',
            'HEMOPTISIS (EXPECTORACIÓN SANGUINOLENTA)',
            'PÉRDIDA DE PESO',
            'DIAFORESIS (SUDORACIÓN EXTREMA)',
            'DISNEA',
            'MIALGIA (DOLOR MUSCULAR)',
            'ARTRALGIA (DOLOR EN ARTICULACIONES)',
            'HIPOREXIA (DISMINUCIÓN DEL APETITO)',
            'DOLOR RETROOCULAR'
        ],
       
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

//---------------------------------------         octava GRAFICA         ------------------------------------------

let ctx8 = document.getElementById("myChart8").getContext("2d");
let myChart8 = new Chart(ctx8, {
    type: "bar",
    data:{
        labels:['GINGIVORRAGIA (SANGRADO A TRAVÉS DE ENCIAS',
            'EPISTAXIS (SANGRADO NASAL)',
            'MELENA (SANGRE EN HECES)',
            'RECTORRAGIA (SANGRADO RECTAL)',
            'FLATULENCIAS',
            'ADINAMIA O ASTENIA',
            'PALIDEZ',
            'TENESMO VESICAL',
            'TENESMO RECTAL ',
            'DISPAREUNIA (DOLOR COITAL)',
            'LEUCORREA (FLUJO VAGINAL)',
            'FETIDEZ GENITAL',
            'ICTERICIA (PIEL Y MUCOSAS AMARILLENTAS)',
            'COLURIA (ORINA OBSCURA)',
            'DISURIA (MICCIÓN DOLOROSA)',
            'POLIAQUIURIA (AUMENTO DE LA FRECUENCIA MICCIONAL)',
            'DOLOR LUMBAR'
        ],
       
        datasets: [{
            label:'',
            data:[10,9,15,4,31,9,15,4,30,9,15,4,31,9,15,4,35,4,30,9,15,4,31,9,15,4,],
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

//---------------------------------------         Novena GRAFICA         ------------------------------------------

let ctx9 = document.getElementById("myChart9").getContext("2d");
let myChart9 = new Chart(ctx9, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'UD. FUE TRATADO POR ALGUNO DE LOS SINTOMAS ANTERIORES'
          }
        }
      }
})

//---------------------------------------         Decima GRAFICA         ------------------------------------------

let ctx10 = document.getElementById("myChart10").getContext("2d");
let myChart10 = new Chart(ctx10, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'RECIBISTE TRATAMIENTO'
          }
        }
      }
})


//---------------------------------------         11 GRAFICA         ------------------------------------------

let ctx11 = document.getElementById("myChart11").getContext("2d");
let myChart11 = new Chart(ctx11, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'FUE ATENDIDO POR PERSONAL MÉDICO'
          }
        }
      }
})


//---------------------------------------         12 GRAFICA         ------------------------------------------

let ctx12 = document.getElementById("myChart12").getContext("2d");
let myChart12 = new Chart(ctx12, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'ACUDIÓ A CONSULTA MÉDICA'
          }
        }
      }
})

//---------------------------------------         13 GRAFICA         ------------------------------------------

let ctx13 = document.getElementById("myChart13").getContext("2d");
let myChart13 = new Chart(ctx13, {
    type: "bar",
    data:{
        labels:['Sí',
            'No',
            'ESTUDIANTE DE MEDICINA',
            'FAMILIAR',
            'PROFESOR NO MÉDICO',
            'ENFERMERO',
            'ATENCIÓN ON LINE POR PERSONAL NO MÉDICO',
            'AMIGO',
            'OTROS',
           
        ],
       
        datasets: [{
            label:'',
            data:[10,9,15,4,31,9,15,4,30,9,15,4,31,9,15,4,3],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
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

//---------------------------------------         14 GRAFICA         ------------------------------------------

let ctx14 = document.getElementById("myChart14").getContext("2d");
let myChart14 = new Chart(ctx14, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'UD SE AUTOMEDICÓ'
          }
        }
      }
})

//---------------------------------------         15 GRAFICA         ------------------------------------------

let ctx15 = document.getElementById("myChart15").getContext("2d");
let myChart15 = new Chart(ctx15, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'CONOCE UD EL SIGNIFICADO DE LA PALABRA EPIDEMIOLOGÍA'
          }
        }
      }
})

//---------------------------------------         16 GRAFICA         ------------------------------------------

let ctx16 = document.getElementById("myChart16").getContext("2d");
let myChart16 = new Chart(ctx16, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'CONSIDERA NECESARIO UN SISTEMA DE VIGILANCIA PARA EL CONTROL EPIDEMIOLÓGICO EN LA AMMED'
          }
        }
      }
})


//---------------------------------------         17 GRAFICA         ------------------------------------------

let ctx17 = document.getElementById("myChart17").getContext("2d");
let myChart17 = new Chart(ctx17, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[10,9],
            backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'CONOCE UD ALGÚN MÉTODO DE VIGILANCIA EPIDEMIOLÓGICA (EN CASO DE SER AFIRMATIVA SU RESPUESTA INDIQUE CÚAL)'
          }
        }
      }
})

