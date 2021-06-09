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

/*mobile auto hide aside*/
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
//     "menus_item_child"
// );
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//     menus_item_child[i].style.display = "none";
//     menus_expand[i].className += " menus-closed";
// }

// var card_category_list = document.getElementsByClassName(
//     "card-category-list child"
// );
// var item = document.getElementsByClassName("card-category-list-item");
// function toggle(t) {
//     var display = t.parentElement.nextSibling.style.display;
//     if (display == "none") {
//         t.parentElement.nextSibling.style.display = "block";
//         t.parentElement.nextSibling.style.height = "100%";
//         t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
//     } else {
//         t.parentElement.nextSibling.style.display = "none";
//         t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
//     }
// }

// for (var i = 0; i < card_category_list.length; i++) {
//     card_category_list[i].style.display = "none";
//     card_category_list[i].style.transition = "all 1s";
//     card_category_list[i].previousSibling.innerHTML +=
//         '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" οnclick="toggle(this)"></i>';
// }