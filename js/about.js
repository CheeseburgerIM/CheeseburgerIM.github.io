//Chart
var chartDom = document.getElementById('chart');
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
                {value: 40, name: 'rose 1'},
                {value: 38, name: 'rose 2'},
                {value: 32, name: 'rose 3'},
                {value: 30, name: 'rose 4'},
                {value: 28, name: 'rose 5'},
                {value: 26, name: 'rose 6'},
                {value: 22, name: 'rose 7'},
                {value: 18, name: 'rose 8'}
            ]
        }
    ]
};

option && myChart.setOption(option);
