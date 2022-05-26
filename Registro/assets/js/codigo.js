//---------------------------------------         PRIMERA GRAFICA         

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
            text: 'CONOCE UD ALGÚN MÉTODO DE VIGILANCIA EPIDEMIOLÓGICA (EN CASO DE SER AFIRMATIVA SU RESPUESTA INDIQUE CÚAL)'
          }
        }
      }
})

