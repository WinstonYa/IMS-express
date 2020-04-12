{% extends './../admin_layout.tpl' %}

{% block content %}
<div class="article-section" id="article-section">
  <a class="article-insert" href="/admin/articleCreate">添加文章</a>
  <ul class="article-title">
    <li class="article-title-item">id</li>
    <li class="article-title-item">标题</li>
    <li class="article-title-item">分类</li>
    <li class="article-title-item">创建时间</li>
    <li class="article-title-item">操作</li>
  </ul>
  {% for val in article %}
  <ul class="article-list">
    <li class="article-list-item article-id">{{val.id}}</li>
    <li class="article-list-item article-text">{{val.title}}</li>
    <li class="article-list-item">{{val.name}}</li>
    <li class="article-list-item">{{val.created_time}}</li>
    <li class="article-list-item">
      <a class="article-item-edit" href="/admin/articleEdit/{{val.id}}">编辑</a>
      <a class="article-item-delete" href="" data-id="{{val.id}}">删除</a>
    </li>
  </ul>
  {% endfor%}
  <div class="article-paging">
    <a class="article-size">1</a>
    <a class="article-size">2</a>
    <a class="article-size">3</a>
    <a class="article-size">4</a>
  </div>
</div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}