{% extends './../layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/login.css">
{% endblock %}

{% block content %}
<body>
  <div class="container">
    <div class="banner">管理员登录</div>
    <div class="content">
      <form class="form">
        <img class="jike-logo" src="/images/logo.png" alt="img">
        <input type="text" class="input" id="loginPhone" placeholder="请输入手机号">
        <input type="password" class="input" id="loginPassword" placeholder="请输入密码">
        <button id='loginBtn'>登录</button>
      </form>
    </div>
    <div class="footer">Copyright © 2020 极客学院体验技术部出品</div>
  </div>
</body>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}