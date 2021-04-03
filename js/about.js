//Chart
var chartDom = document.getElementById('chart1');
var myChart = echarts.init(chartDom);
var option;

option = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: false, readOnly: true},
            restore: {show: true},
            saveAsImage: {show: false}
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 3
            },
            data: [
                {value: 40, name: 'Html'},
                {value: 38, name: 'Java'},
                {value: 32, name: 'Vue'},
                {value: 30, name: 'C/C++'},
                {value: 28, name: 'Javascript'},
                {value: 26, name: 'CSS'},
                {value: 22, name: 'SQL'},
                {value: 18, name: 'Verilog'}
            ]
        }
    ]
};

option && myChart.setOption(option);
