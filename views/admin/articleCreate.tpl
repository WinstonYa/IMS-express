{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">添加文章</div>
    <form class="sort-insert-form">
      <div class="article-input">
        <p class="sort-input-title">标题</p>
        <input id="article-input-name" type="text"  placeholder="请输入标题">
        <p class="articleEdit-input-name-message" id="article-input-name-message">标题不能为空</p>
      </div>
      <div class="article-input">
        <p class="sort-input-title">类型</p>
        <select id="article-input-sort">
        {% for val in sortName %}
          <option value ={{val.id}}>{{val.name}}</option>
        {% endfor %}
        </select>
      </div>
      <div class="article-input">
        <p class="sort-input-title">内容</p>
        <div class='editor1'>
          <textarea class="editor-input" id="editor1" placeholder="请输入内容"></textarea>
        </div>
      </div>
    </form>
    <button class="article-insert-btn" id="article-insert-btn">提交</button>
  </div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}