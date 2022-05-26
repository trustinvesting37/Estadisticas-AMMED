
//---------------------------------------         PRIMERA GRAFICA         ------------------------------------------

let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx,{
    type: "bar",
    data:{
        labels:['HTA','DM2','ASMA', 'ALERGIA A MEDICAMENTOS', 'NINGUNO'],
        datasets: [{
            label: '',
            data:[5,0,12,0,83],
            backgroundColor:[
                'rgba(103,58,183,.8)',
                'rgba(233,30,99,.8)'
            ]
        }]
    },
    options:{
        responsive: true,
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
});


//---------------------------------------         Quinta GRAFICA         ------------------------------------------

let ctx5 = document.getElementById("myChart5").getContext("2d");
let myChart5 = new Chart(ctx5, {
    type: "bar",
    data:{
        labels:[
            'NINGUNO',
            'CAFÉ',
            'OH',
            'TABAQUICO',
            'VAPER',

        ],
        datasets: [{
            label:'',
            data:[51,46,10,2,3],
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


let ctx2 = document.getElementById("myChart2").getContext("2d");
let myChart2 = new Chart(ctx2,{
    type: 'bar',
    data: {
        labels:['Genero'],
        datasets: [{
            label: 'Masculino',
            data: [37],
            backgroundColor: [
                'rgba(103,58,183,.8)',
                
            ]
          
            },
            {
                label:'Femenino',
                data: [63],
            backgroundColor: [
                'rgba(233,30,99,.8)'
            ]
          

            }
        ]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'SEXO'
          }
        }
        
    },


})
