{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="sort-section" id="sort-section">
  <a class="sort-insert" href="/admin/sortCreate">添加分类</a>
  <ul class="sort-title">
    <li class="sort-title-item">id</li>
    <li class="sort-title-item">名称</li>
    <li class="sort-title-item">操作</li>
  </ul>
  {% for val in sort %}
  <ul class="sort-list">
    <li class="sort-list-item">{{val.id}}</li>
    <li class="sort-list-item">{{val.name}}</li>
    <li class="sort-list-item">
      <a class="sort-item-edit" href="/admin/sortEdit/{{val.id}}">编辑</a>
      <a class="sort-item-delete" href="" data-id="{{val.id}}">删除</a>
    </li>
  </ul>
  {% endfor%}
</div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}