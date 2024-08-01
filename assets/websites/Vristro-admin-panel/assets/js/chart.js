let option={
    series: [
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#00ab55'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart1"), option);
chart.render();

let option2={
    series: [
        {
            data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#e7515a'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart-2"), option2);
chart.render();

let option3={
    series: [
        {
            data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#00ab55'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart-3"), option3);
chart.render();


let option4={
    series: [
        {
            data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#e7515a'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart-4"), option4);
chart.render();

let option5={
    series: [
        {
            data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#00ab55'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart-5"), option5);
chart.render();

let option6={
    series: [
        {
            data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#e7515a'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}
var chart = new ApexCharts(document.querySelector("#chart-6"), option6);
chart.render();