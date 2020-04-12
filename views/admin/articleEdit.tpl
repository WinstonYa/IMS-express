{% extends './../admin_layout.tpl' %}

{% block content %}
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑文章</div>
    <form class="sort-insert-form">
      <div class="article-input">
        <p class="sort-input-title">标题</p>
        <input id="articleEdit-input-name" type="text" placeholder="请输入标题"  value="{{article.title}}">
        <p class="articleEdit-input-name-message" id="articleEdit-input-name-message">标题不能为空</p>
      </div>
      <div class="article-input">
        <p class="sort-input-title">类型</p>
        <select id="articleEdit-input-sort">
        {% for val in sort %}
          <option value ={{val.id}}>{{val.name}}</option>
        {% endfor %}
        </select>
      </div>
      <div class="article-input">
        <p class="sort-input-title">内容</p>
        <div class='editor2'>
          <textarea class="editor-input" id="editor2-input" placeholder="请输入内容">{{article.content}}</textarea>
        </div>
      </div>
    </form>
    <button class="articleEdit-insert-btn" data-id="{{article.id}}" id="articleEdit-insert-btn">提交</button>
  </div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
<script src="/javascripts/admin.js"></script>
{% endblock %}