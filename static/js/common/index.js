$(function () {
    /*调整心形按钮位置*/
    heartBtnPosition("heartBtn");
    //自适应高宽
    resizeWindow("container");
    /*自适应位置和高宽*/
    heartLinePosition("heartLine");
    //自适应遮盖层
    resizeWindow("cover")
})

window.onresize=function(){
    //自适应高宽
    resizeWindow("container");
    //心形按钮的位置
    heartBtnPosition("heartBtn");
    //线条高宽和位置
    heartLinePosition("heartLine");

}

/*心形按钮的位置*/
function heartBtnPosition(ele){
    let node = document.getElementById(ele);
    node.style.top = (window.innerHeight/2)-(node.offsetHeight/2)+"px";
    node.style.left = ((window.innerWidth/2)-(node.offsetWidth/2))+"px";
}

/*线条位置*/
function heartLinePosition(ele){
    let node = document.getElementById(ele);
    node.style.top = (window.innerHeight/2)-(node.offsetHeight/2)-(document.getElementById("heartBtn").offsetHeight)+"px";
    node.style.width
        = document.getElementById("heartLineImage").style.width
        = document.getElementById("heartLineImageGray").style.width
        = window.innerWidth+"px";
}

$("#heartBtn").on('click',function(){
   clickHeart();
});

/*点击心形按钮*/
function clickHeart(){
    $(".top").hide()
    $(".bottom").hide()
}
