//--------------------------- GRAFICA ESTADISTICA GENERAL---------------------------------
function totalCasosChart (ctx) {
    
    /*
    const {
        confirmed,
        deaths,
        recovered,
    } = data 
     */
      
    const chart = new Chart(ctx, {
        type: 'line',
        data:{
            labels: [2,4,6,3,74,3],
            datasets: [
                {
                    label: 'Muerte ',
                    borderColor: '#C74028',
                    data : [2,6,3,7,5,8],
                    backgroundColor: '#C74028',
                    
    
                },
                {
                    label: 'Recuperados',
                    borderColor: '#12C77B',
                    data : [1,4,2,8,9,5],
                    backgroundColor: '#12C77B',
                },
                {
                    label: 'Confirmados',
                    borderColor: '#C7B100',
                    data : [3,4,8,2,5,8],
                    backgroundColor: '#C7B100',
                    
 
                    
                },
                
                
                
            ]
            
        },
    
        
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]

            },

            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding : 30,
                    boxWidth: 25,
                    boxHeight: 25,
                    fontFamily: "Raleway",
                    fontColor: 'black',
                },
               
            },
            // Configuracion de ls dimenciones con layout

            tooltips:{

                titleFontSize: 20,
                xPadding: 20,
                yPadding: 20,
                bodyFontSize: 15,
                bodySpacing: 10,
                mode:'x',

            },
            elements: {

                line:{
                  
                    fill:false,

                },

                point:{
                    radius: 6,
                    
                    backgroundColor: 'white',
                    hoverRadius: 8,
                    hoverBorderWidth: 4,
                },
            }, 
        },
        
/*
            
            

        
         */
        //Leyenda
        
    
        })
};
function renderCharts(){
    const ctx = document.querySelector("#myChart").getContext('2d');
    totalCasosChart(ctx);
}
renderCharts();
//--------------------------- FIN DE GRAFICA ESTADISTICA GENERAL---------------------------------

//--------------------------- GRAFICA POR GENERO-------------------------------------------------


function totalCasosChart2 (ctx2) {  
    const chart = new Chart(ctx2, {

        type: 'doughnut',

        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
            }
          }
        },

        data:{
            
                labels: [
                  'Masculino',
                  'Femenino',
                  'Personal Civil'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [7, 9, 1],
                    backgroundColor: [
                      '#0488C7',
                      '#c70f9f',
                      '#29c724'
                    ],
                    hoverOffset: 4
                  }]
            
        },
        

    }
        
        
        
        
        )
};

function renderChart2(){
    const ctx2 = document.querySelector("#myChart2").getContext("2d");
    totalCasosChart2(ctx2);
}
renderChart2();

  /*
  
 
  

  <canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>
  
  
  */