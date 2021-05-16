setInterval(() => {
    let create_time = Math.round(new Date('2020-12-08 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
    //格式规范化，个位数前面加0
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
    }//年
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }//天
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }//时
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }//分
    if (second > 0) {
      time[4] = nol(second);
    }//秒
    //早上7点到晚上10点营业
    if ((Number(time[2])<23) && (Number(time[2])>7)){
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/TongPan-Working-red' title='Stay Hungry, Stay Foolish~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    } //徽标内容参考站内教程
    //其余时间打烊
    else{
      currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/Jarvis-Sleeping-blue' title='Time to go to bed~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'; //徽标内容参考站内教程
    }
    //覆写挂载标签的内容
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);