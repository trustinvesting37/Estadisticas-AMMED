

//---------------------------------------         Sexta GRAFICA         ------------------------------------------

let ctx6 = document.getElementById("myChart6").getContext("2d");
let myChart6 = new Chart(ctx6, {
    type: "bar",
    data:{
        labels:['DISURIA',
        'DIAFORESIS',
        'TOS',
        'ORINA FETIDA',
        'DISPAREUNIA',
        'SECRECION A TRAVEZ DE GENITALES',
        'CEFALEA',
        'DISFAGIA',
        'FIEBRE',
        'DOLOR LUMBAR',
        'OLOR FETIDO A TRAVEZ DE GENITALES',
        'ANOSMIA',
        'MIALGIA',
        'DIARREA',
        'POLIAQUIURIA',
        'PERDIDA DE PESO'
        ],
       
        datasets: [{
            label:'',
            data:[53,53,48,45,34,34,34,27,26,25,22,21,19,15,13],
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
            'NAUSEAS',
            'TAQUIPNEA',
            'DOLOR ABDOMINAL',
            'ARTRALGIA',
            'DOLOR RETROOCULAR',
            'MIALGIA',
            'AGEUSIA',
            'FLATULENCIA',
            'HEMATOQUECIA',
            'GOTEO NASAL',
            'ESCALOFRIOS',
            'DISNEA',
            'PERDIDA DE APETITO',
            'VOMITO',
            'DOLOR TORACICO',
            'AMIGDALITIS'
        ],
       
        datasets: [{
            label:'',
            data:[13,12,12,12,12,12,12,11,11,10,9,9,7,7,7,7],
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
        labels:[
            'EPIGASTRALGIA',
            'HEMOPTISIS',
            'TAQUICARDIA',
            'ADENOMEGALIA',
            'OLIGURIA',
            'ICTERICIA',
            'GINGIVORRAGIA',
            'SARPULLIDO',
            'DISURIA',
            'CONJUNTIVITIS',
            'OTALGIA',
            'ALITOSIS'
        ],
       
        datasets: [{
            label:'',
            data:[6,6,5,4,3,3,3,3,2,2,1,1],
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
            data:[55,45],
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
            text: 'PERSONAL QUE FUE TRATADO POR ALGUNO DE LOS SINTOMAS ANTERIORES'
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
            data:[35,65],
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
            text: 'PERSONAL QUE RECIBIO TRATAMIENTO'
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
            data:[40,60],
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
            text: 'PERSONAL QUE FUE ATENDIDO POR PERSONAL MÉDICO'
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
            data:[53,47],
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
            text: 'PERSONAL QUE SE AUTOMEDICO'
          }
        }
      }
})

let ctx16 = document.getElementById("myChart16").getContext("2d");
let myChart16 = new Chart(ctx16, {
    type: "doughnut",
    data:{
        labels:['SI',
        'NO' 
        ],
       
        datasets: [{
            label:'',
            data:[73,27],
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
            text: '¿CONOCEN EL TERMINO DE EPIDEMIOLOGIA?'
          }
        }
      }
})


//---------------------------------------         17 GRAFICA         ------------------------------------------
