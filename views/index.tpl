<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>IMS</title>
  <link rel="stylesheet" href="/stylesheets/index.css">
  <link rel="stylesheet" href="/stylesheets/reset.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <a class="header-nav" href="/index">
        <img class="head-logo" src='/images/logo.png'>
      </a>
      <ul class="header-content">
        <a class="head-item" href="/index/1">时政热点</a>
        <a class="head-item" href="/index/2">朝闻天下</a>
        <a class="head-item" href="/index/4">新闻联播</a>
        <a class="head-item" href="/index/6">新闻三十分</a>
      </ul>
      <div class="login-section">
        <a class="login" href="/admin/login">登录</a>
        <img class="login-img" src='/images/index-login.jfif'>
      </div>
    </div>
    <div class="content">
      {% block content %}
      {% endblock %}
    </div>
    <div class="footer">Copyright © 2020 极客学院体验技术部出品</div>
  </div>
</body>
</html>