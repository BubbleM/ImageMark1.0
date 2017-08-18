<div>
  <div id="content">
    <div class="bg_img">
      <a class="title">专注于计算机视觉和深度学习原创技术</a>
      <!-- 循环播放loop 不要声音muted -->
      <video height="730" class="player" autoplay="autoplay" preload="auto" loop poster="${require('../../assets/车辆行人检测-post-new.jpg')}">
        <source type="video/mp4" src="${require('../../assets/车辆行人检测.mp4')}"/>
      </video>
    </div>
  </div>

  <header>
    <img src="${require('../../assets/logo1.png')}" alt="logo">
    <ul class="nav" id="nav">
      <li class="nav-item1">
        核心技术
        <div class="bottom-ul">
          <ul class="left-ul">
            <li>人脸技术</li>
            <li>智能监控</li>
            <li>深度学习框架</li>
          </ul>
          <ul class="right-ul">
            <li>图像识别</li>
            <li>文字识别</li>
            <li></li>
          </ul>
        </div>
      </li>
      <li class="nav-item1">
        媒体动态
        <div class="bottom-ul">
          <ul class="left-ul">
            <li>人脸技术</li>
            <li>智能监控</li>
            <li>深度学习框架</li>
          </ul>
          <ul class="right-ul">
            <li>图像识别</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
      <li class="nav-item1">
        媒体动态
        <div class="bottom-ul">
          <ul class="left-ul">
            <li>人脸技术</li>
            <li>深度学习框架</li>
            <li></li>
          </ul>
          <ul class="right-ul">
            <li>图像识别</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
      <li class="nav-item1">关于我们</li>
    </ul>
    <div class="login">
      <button class="btn btn-success" href="#" role="button"><a href="./src/html/login.html">登陆</a></button>
      <button class="btn btn-success" href="#" role="button">注册</button>
    </div>
  </header>

<% for (let i = 0; i < arr.length; i++) { %>
  <% if (i % 2 === 0) { %>
  <div class="section" class="row">
    <div class="col-md-7">
      <img class="section_img" src="" alt="">
    </div>
    <div class="col-md-5 info">
      <h2><%= arr[i].title %></h2>
      <p><%= arr[i].content %></p>
    </div>
  </div>
  <% } else { %>
  <div class="section" class="row">
    <div class="col-md-5 info">
      <h2><%= arr[i].title %></h2>
      <p><%= arr[i].content %></p>
    </div>
    <div class="col-md-7">
      <img class="section_img" src="" alt="">
    </div>
  </div>
  <% } %>
<% } %>

  <footer>
    <span>Amazing基于深度学习的数据标记平台©2017展示专用</span><br><br>
    <span>
      <a href="">注册</a>&nbsp;|&nbsp;
      <a href="">登录</a>&nbsp;|&nbsp;
      <a href="">关于我们</a>&nbsp;|&nbsp;
      <a href="">功能</a>&nbsp;|&nbsp;
      <a href="">隐私权政策</a>&nbsp;|&nbsp;
      <a href="">服务条款</a>
    </span>
  </footer>

  <!--当页面滑动时候出现-->
  <div class="return_top">
    <a href="#content"><img src="${require('../../assets/top-green.png')}" alt=""></a>
  </div>
</div>