{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">添加管理员</div>
    <form class="sort-insert-form">
      <div class="sort-input">
        <p class="sort-input-title">姓名</p>
        <input id="sort-input-name" type="text" placeholder="请输入姓名">
        <p class="sort-input-name-message" id="sort-input-name-message">格式错误</p>
      </div>
      <div class="sort-input">
        <p class="sort-input-title">手机号</p>
        <input id="sort-input-phone" type="text" placeholder="请输入手机号">
        <p class="sort-input-phone-message" id="sort-input-phone-message">手机号格式错误</p>
      </div>
      <div class="sort-input">
        <p class="sort-input-title">密码</p>
        <input id="sort-input-password" type="text" placeholder="请输入密码">
        <p class="sort-input-password-message" id="sort-input-password-message">密码格式错误</p>
      </div>
    </form>
    <button class="sort-insert-btn" id="user-insert-btn">提交</button>
  </div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}