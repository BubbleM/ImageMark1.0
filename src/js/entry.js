require('../css/reset.css');
require('../css/base.styl');
// var $ = require('jquery');

// import 'bootstrap/dist/js/bootstrap.js';

// $('body').append('<div>hello world</div>');

// 封装一个操作DOM的函数
(function (window, undefined) { // 定义一个立即执行函数,传入全局对象window
  function dquery(id) {
    function DQuery(id) { //　定义类
      var str = id.substr(0,1);
      var id = id.substr(1);
      switch (str) {
        case '#':
          this.ele = document.getElementById(id); // id查找
          break;
        case '.':
          this.ele = document.getElementsByClassName(id);
          break;
      }
      return this; // 返回对象
    };
    DQuery.prototype = { // 利用原型扩展方法
      html: function (val) {　// 设置html
        this.ele.innerHTML = val;
        return this; // 返回对象,方便以后链式操作
      },
      attr: function (key, val) { //添加属性
        this.ele.setAttribute(key, val);
        return this;
      },
      css: function (key, val) { // 添加设置样式
        this.ele.style[key] = val;
        return this;
      },
      on: function (event, fn) {
        this.ele.addEventListener(event, fn, false);
        return this;
      }
    };
    return new DQuery(id); // 返回实例对象
  };
  dquery.wait = function (time, fn) { // 添加延时静态方法，可通过函数名直接使用
    setTimeout(fn, time);
  };
  dquery.each = function (arr, callback) { // 添加遍历迭代静态方法
    for (var key in arr) {
      callback(key, arr[key]);
    };
  };
  window.$$ = window.dquery = dquery;
})(window);

/*
// 测试框架成功
 $$('#nav').on('click',function () {
  console.log(this);
  this.css('background', 'red');
})
*/

// nav头部导航动画效果
var lists = $('.nav-item1');
for(var i=0; i < lists.length; i++) {
  lists[i].onmouseover = function () {
    this.style.width = '240px'; // 点击后li宽度变为原来的２倍
    // this.style.transition = 'width 2s'; // 宽度变化动画
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