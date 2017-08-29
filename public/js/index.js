// nav头部导航动画效果
var lists = $('.nav-item1');
for(var i=0; i < lists.length; i++) {
  lists[i].onmouseover = function () {
    this.style.width = '240px'; // 点击后li宽度变为原来的２倍
    $(this).find('.bottom-ul').slideDown('slow');　// li内部内容向下滚动出现动画
  }
  lists[i].onmouseout = function () {
    this.style.width = '120px';
    this.style.transition = 'width 2s';
    $(this).find('.bottom-ul').hide();
  }
}
// 设置li内部动画效果
var navLi = $('.bottom-ul li');
for (var i=0; i < navLi.length; i++) {
  navLi[i].onmouseover = function () {
    this.parentNode.parentNode.style.display = 'block'; // 避免用户无法点击到li内容部分
    this.style.color = 'orange';
  }
  navLi[i].onmouseout = function () {
    this.style.color = '#fff';
  }
}