{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="user-section" id="user-section">
  <a class="user-insert" href="/admin/userCreate">添加管理员</a>
  <ul class="user-title">
    <li class="user-title-item">id</li>
    <li class="user-title-item">姓名</li>
    <li class="user-title-item">手机号</li>
    <li class="user-title-item">密码</li>
    <li class="user-title-item">操作</li>
  </ul>
  {% for val in user %}
  <ul class="user-list">
    <li class="user-list-item">{{val.id}}</li>
    <li class="user-list-item">{{val.name}}</li>
    <li class="user-list-item">{{val.phone}}</li>
    <li class="user-list-item">{{val.password}}</li>
    <li class="user-list-item">
      <a class="user-item-edit" href="/admin/userEdit/{{val.id}}">编辑</a>
      <a class="user-item-delete" href="" data-id="{{val.id}}">删除</a>
    </li>
  </ul>
  {% endfor %}
</div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}