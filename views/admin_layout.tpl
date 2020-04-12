<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>管理员页面</title>
    <link rel="stylesheet" href="/stylesheets/admin.css">
    <link rel="stylesheet" href="/stylesheets/reset.css">
</head>
<body>
  <div class="container">
    <div class="head-section">
      <img src="/images/logo.png">
      <div class="exit">
        <a class="exit-btn" href="/admin/login">退出系统</a>
      </div>
    </div>
    <div class="body-section">
      <div class="side-content">
        <a class="side-item" href="/admin/user">
          <img src='/images/user.png'>
          <p>用户管理</p>
        </a>
        <a class="side-item" href="/admin/sort">
          <img src='/images/sort.png'>
          <p>分类管理</p>
        </a>
        <a class="side-item" href="/admin/article">
          <img src='/images/article.png'>
          <p>文章管理</p>
        </a>
      </div>
      <div class="layout-content">
        <div class="main-content">
          {% block content %}
          {% endblock %}
        </div>
        <div class="page-footer">Copyright © 2020 极客学院体验技术部出品</div>
      </div>
    </div>
  </div>

  {% block js %}

  {% endblock %}
</body>
</html>