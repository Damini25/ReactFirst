import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: {
                labels: [0, 0, 20, 30, 40, 50, 60],
                datasets: [
                    {
                        label: '# Profit',
                        data: [0,20,1000,4000,5000,6000],
                        borderWidth: 1,
                        fill: false,
                        backgroundColor:"blue",
                        borderColor:"blue",
                        lineTension:0
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            color:"#666666"
                        },
                        ticks: {
                            padding: 5,
                            min: 0,
                            max: 40,
                            stepSize: 10
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color:"#666666"
                        },
                        ticks: {
                            padding: 15,
                            min:-1000,
                            max: 6000,
                            stepSize: 1000
                        }
                    }]
                },
                elements:{
                    point: { radius: 0 }
                }
            }
        });
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

export default LineChart;