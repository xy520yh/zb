
function rePosition(){
  var width = document.documentElement.clientWidth || document.body.clientWidth;
  var ratio = width/750;
  if(width<=750){
      document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
  }else{
      document.getElementsByTagName('html')[0].style.fontSize="100px";
  }
}
rePosition();
window.onresize = function(){
  rePosition();
};

$(function () {
  //视频弹窗
  $(function(){
    $(".video1").colorbox({iframe:true, innerWidth:"80%", innerHeight:"30%"});	
  })

})


