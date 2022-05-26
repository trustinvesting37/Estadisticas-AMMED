
//125243
//samuel@gmail.com
//////////////////////////SEGUNDO AÑO///////////////////////////////////

function totalCasosChart2 (ctx) {  
    const chart = new Chart(ctx, {

        type: 'bar',

        // Chart Options
        options : {
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each bar to be 2px wide and green
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: 'rgb(0, 255, 0)',
                    borderSkipped: 'bottom'
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration:500,
            legend: {
                position: 'top',
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: false,
                    },
                    scaleLabel: {
                        display: true,
                    }
                }]
                
            },
        },

        data : {
            labels: ["Primer Año", "Segundo Año", "Tercer Año", "Cuarto Año", "Quinto Año" , "Sexto año" ,"Personal Militar", "Personal Civil"],
            datasets: [{
                label: "Personal Masculino",
                data: [3, 4, 1, 2, 1, 3, 0, 0],
                backgroundColor: "#673AB7",
                hoverBackgroundColor: "rgba(103,58,183,.9)",
                borderColor: "transparent"
            }, {
                label: "Personal Femenino",
                data: [2, 1, 5, 3, 2, 4, 0, 2],
                backgroundColor: "#E91E63",
                hoverBackgroundColor: "rgba(233,30,99,.9)",
                borderColor: "transparent"
            }]
        },

  

    });
};

function renderChart2(){
    var ctx = $("#column-chart");
    totalCasosChart2(ctx);
}
renderChart2();





    // Chart Options
   

    // Create the chart
    var lineChart = new Chart(ctx, config);


  /*
  
 
  

  
  */