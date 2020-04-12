{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑分类</div>
    <form class="sort-insert-form"> 
      <div class="sort-input">
        <p class="sort-input-title">名称</p>
        <input id="sortEdit-input-name" type="text" placeholder="请输入名称" value="{{sort.name}}">
        <p class="sort-input-name-message" id="sortEdit-input-name-message">内容不能为空</p>
      </div>
    </form>
    <button class="sort-insert-btn" data-id="{{sort.id}}" id="sortEdit-insert-btn">提交</button>
  </div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}