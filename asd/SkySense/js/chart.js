var myChart = document.getElementById('myChart').getContext('2d');

var massPopChart = new Chart(myChart, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: '00:00',
                    data: [{
                        x: 0,
                        y: 0,
                        r: 10
                    }],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label:'01:00',
                    data:[{
                        x:1,
                        y:6,
                        r:10
                    }],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgb(255,0,0)',
                    borderWidth: 1  
                },
                {
                    label:'02:00',
                    data:[{
                        x:2,
                        y:8,
                        r:10
                    }],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgb(255,0,0)',
                    borderWidth: 1  
                },
                {
                    label: 'Conexión',
                    type: 'line', // <- Línea entre los dos puntos
                    data: [
                        { x: 0, y: 6 },
                        { x: 1, y: 6 },
                        { x: 2, y: 8 }
                    ],
                    backgroundColor: 'rgba(0, 0, 0, 0)', // sin relleno
                    borderColor: 'blue',
                    borderWidth: 2,
                    pointRadius: 0, // Oculta los puntos de la línea
                    fill: false
                }
                    
            ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Gráfico de Burbuja - Chart.js'
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                    y: {
                        beginAtZero: true,
                        min:0,
                        max:45
                    }
                }
            }
        });

