//Chart1
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

// chart2
var chartDom = document.getElementById('chart2');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '自定义雷达图'
    },
    legend: {
        data: ['图一','图二', '张三', '李四']
    },
    radar: [
        {
            indicator: [
                { text: '指标一' },
                { text: '指标二' },
                { text: '指标三' },
                { text: '指标四' },
                { text: '指标五' }
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter: '【{value}】',
                textStyle: {
                    color: '#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                        'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                        'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        {
            indicator: [
                { text: '语文', max: 150 },
                { text: '数学', max: 150 },
                { text: '英语', max: 150 },
                { text: '物理', max: 120 },
                { text: '化学', max: 108 },
                { text: '生物', max: 72 }
            ],
            center: ['75%', '50%'],
            radius: 120
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [100, 8, 0.40, -80, 2000],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 1500],
                    name: '图二',
                    areaStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            ]
        },
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [120, 118, 130, 100, 99, 70],
                    name: '张三',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value;
                        }
                    }
                },
                {
                    value: [90, 113, 140, 30, 70, 60],
                    name: '李四',
                    areaStyle: {
                        opacity: 0.9,
                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                            {
                                color: '#B8D3E4',
                                offset: 0
                            },
                            {
                                color: '#72ACD1',
                                offset: 1
                            }
                        ])
                    }
                }
            ]
        }
    ]
}

option && myChart.setOption(option);

// chart3
var chartDom = document.getElementById('chart3');
var myChart = echarts.init(chartDom);
var option;

var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data = [{
    name: '虚构',
    itemStyle: {
        color: colors[1]
    },
    children: [{
        name: '小说',
        children: [{
            name: '5☆',
            children: [{
                name: '疼'
            }, {
                name: '慈悲'
            }, {
                name: '楼下的房客'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '虚无的十字架'
            }, {
                name: '无声告白'
            }, {
                name: '童年的终结'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫老人日记'
            }]
        }]
    }, {
        name: '其他',
        children: [{
            name: '5☆',
            children: [{
                name: '纳博科夫短篇小说全集'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '安魂曲'
            }, {
                name: '人生拼图版'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '比起爱你，我更需要你'
            }]
        }]
    }]
}, {
    name: '非虚构',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: '设计',
        children: [{
            name: '5☆',
            children: [{
                name: '无界面交互'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '数字绘图的光照与渲染技术'
            }, {
                name: '日本建筑解剖书'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '奇幻世界艺术\n&RPG地图绘制讲座'
            }]
        }]
    }, {
        name: '社科',
        children: [{
            name: '5☆',
            children: [{
                name: '痛点'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '卓有成效的管理者'
            }, {
                name: '进化'
            }, {
                name: '后物欲时代的来临'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫与文明'
            }]
        }]
    }, {
        name: '心理',
        children: [{
            name: '5☆',
            children: [{
                name: '我们时代的神经症人格'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '皮格马利翁效应'
            }, {
                name: '受伤的人'
            }]
        }, {
            name: '3☆'
        }, {
            name: '2☆',
            children: [{
                name: '迷恋'
            }]
        }]
    }, {
        name: '居家',
        children: [{
            name: '4☆',
            children: [{
                name: '把房子住成家'
            }, {
                name: '只过必要生活'
            }, {
                name: '北欧简约风格'
            }]
        }]
    }, {
        name: '绘本',
        children: [{
            name: '5☆',
            children: [{
                name: '设计诗'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '假如生活糊弄了你'
            }, {
                name: '博物学家的神秘动物图鉴'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '方向'
            }]
        }]
    }, {
        name: '哲学',
        children: [{
            name: '4☆',
            children: [{
                name: '人生的智慧'
            }]
        }]
    }, {
        name: '技术',
        children: [{
            name: '5☆',
            children: [{
                name: '代码整洁之道'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Three.js 开发指南'
            }]
        }]
    }]
}];

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                case '5☆':
                    bookScoreId = 0;
                    return itemStyle.star5;
                case '4☆':
                    bookScoreId = 1;
                    return itemStyle.star4;
                case '3☆':
                    bookScoreId = 2;
                    return itemStyle.star3;
                case '2☆':
                    bookScoreId = 3;
                    return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

option = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333'
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};

option && myChart.setOption(option);