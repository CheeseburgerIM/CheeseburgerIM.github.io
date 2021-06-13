// alter title by JS
var tempTitle=document.title;
console.log(tempTitle);
window.onfocus=function(){
    // document.title="CheeseburgerIM - IM灬Tony Pan";
    document.title=tempTitle;
}
window.onblur=function(){
    document.title="Waiting For You ^_^";
}

// print some information on console
// console.log("Don't scroll down any further >_<");
console.log("⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️");
console.log("欢迎大佬做客我的小站😁");
console.log("打开控制台说明你要来扒代码了,球球了别再看了🤖");
console.log("哈哈,开个玩笑不要介意🧊");
console.log("不嫌弃的话大佬可以加个友链互动交流🍻https://cheeseburgerim.space/link/");
console.log("有什么独特的想法欢迎大佬在留言板留言哦💬https://cheeseburgerim.space/MessageBoard/")
console.log("⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️");

var myDate = new Date();

function west2chinese(day) {
    if(day==0) return 6;
    else return day-2;
}

var temp1 = document.getElementById("first");
temp1.style.width = Math.floor(myDate.getHours() * 100 / 24) + "%";
temp1.attributes["data-percent"].nodeValue = Math.floor(myDate.getHours() * 100 / 24);
document.getElementById("Hour_Num").innerText = "今天已过去" + myDate.getHours() + "小时";

var temp2 = document.getElementById("second");
temp2.style.width = Math.floor(west2chinese(myDate.getDay()) * 100 / 7) + "%";
temp2.attributes["data-percent"].nodeValue = Math.floor(west2chinese(myDate.getDay()) * 100 / 7);
document.getElementById("Day_Num").innerText = "这周已过去" + west2chinese(myDate.getDay()) + "天";

var temp3 = document.getElementById("third");
temp3.style.width = Math.floor(myDate.getDate() * 100 / 31) + "%";
temp3.attributes["data-percent"].nodeValue = Math.floor(myDate.getDate() * 100 / 31);
document.getElementById("Date_Num").innerText = "本月已过去" + myDate.getDate() + "天";

var temp4 = document.getElementById("fourth");
temp4.style.width = Math.floor(myDate.getMonth() * 100 / 12) + "%";
temp4.attributes["data-percent"].nodeValue = Math.floor(myDate.getMonth() * 100 / 12);
document.getElementById("Month_Num").innerText = "今年已过去" + myDate.getMonth() + "个月";

var temp5 = document.getElementById("fifth");
temp5.style.width = Math.floor(myDate.getMinutes() * 100 / 60) + "%";
temp5.attributes["data-percent"].nodeValue = Math.floor(myDate.getMinutes() * 100 / 60);
document.getElementById("Minute_Num").innerText = "这小时已过去" + myDate.getMinutes() + "分钟";
setInterval(function () {
    var myDate = new Date();

    var temp1 = document.getElementById("first");
    temp1.style.width = Math.floor(myDate.getHours() * 100 / 24) + "%";
    temp1.attributes["data-percent"].nodeValue = Math.floor(myDate.getHours() * 100 / 24);
    document.getElementById("Hour_Num").innerText = "今天已过去" + myDate.getHours() + "小时";

    var temp2 = document.getElementById("second");
    temp2.style.width = Math.floor(west2chinese(myDate.getDay()) * 100 / 7) + "%";
    temp2.attributes["data-percent"].nodeValue = Math.floor(west2chinese(myDate.getDay()) * 100 / 7);
    document.getElementById("Day_Num").innerText = "这周已过去" + west2chinese(myDate.getDay()) + "天";

    var temp3 = document.getElementById("third");
    temp3.style.width = Math.floor(myDate.getDate() * 100 / 31) + "%";
    temp3.attributes["data-percent"].nodeValue = Math.floor(myDate.getDate() * 100 / 31);
    document.getElementById("Date_Num").innerText = "本月已过去" + myDate.getDate() + "天";

    var temp4 = document.getElementById("fourth");
    temp4.style.width = Math.floor(myDate.getMonth() * 100 / 12) + "%";
    temp4.attributes["data-percent"].nodeValue = Math.floor(myDate.getMonth() * 100 / 12);
    document.getElementById("Month_Num").innerText = "今年已过去" + myDate.getMonth() + "个月";

    var temp5 = document.getElementById("fifth");
    temp5.style.width = Math.floor(myDate.getMinutes() * 100 / 60) + "%";
    temp5.attributes["data-percent"].nodeValue = Math.floor(myDate.getMinutes() * 100 / 60);
    document.getElementById("Minute_Num").innerText = "这小时已过去" + myDate.getMinutes() + "分钟";
}, 10000);