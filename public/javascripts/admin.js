const PAGE = {
  init: function(){
    this.bind();
  },
  bind: function(){
    //新增
    $('#user-insert-btn').on('click',this.submit_user);
    $('#sort-insert-btn').on('click',this.submit_sort);
    $('#article-insert-btn').on('click',this.submit_article);

    //编辑
    $('#userEdit-insert-btn').on('click',this.edit_user);
    $('#sortEdit-insert-btn').on('click',this.edit_sort);
    $('#articleEdit-insert-btn').on('click',this.edit_article);

    //删除
    $('.user-item-delete').on('click',this.delete_user);
    $('.sort-item-delete').on('click',this.delete_sort);
    $('.article-item-delete').on('click',this.delete_article);

    //登录
    $('#loginBtn').on('click',this.login);
  },

  login: function(){
    console.log(1233333) 
    let phone = $('#loginPhone').val();
    let password = $('#loginPassword').val();
    console.log(phone,password,123)
    if(!phone || !password){
      alert('请输入参数')
      return
    }
    
    $.ajax({
      url: '/api/login',
      type: 'POST',
      data: {phone,password},
      success: function(data){
        if(data.code == 200){
          alert('登陆成功')
          location.href = '/admin/user/'
        }else{
          alert(data)
        }
      },
      error: function(err) {
        console.log(err)
      },
    })
  },

  edit_article: function(){
    let islock = true;
    let id = $(this).data('id');
    let title = $('#articleEdit-input-name').val();
    let sort_id = $('#articleEdit-input-sort').val();
    let content = $('#editor2-input').val();
    if(!title){
      $('#articleEdit-input-name').attr({class:' active'});
      $('.articleEdit-input-name-message').css({'display':'block'});
      islock = false;
    }else{
      $('#articleEdit-input-name').attr({class:''});
      $('.articleEdit-input-name-message').css({'display':'none'});
    }

    if(islock){
      $.ajax({
        url: '/api/article/' + id,
        type: 'PUT',
        data: {title,sort_id,content},
        success: function(data){
          if(data.code == 200){
            alert('编辑成功')
            location.href = '/admin/article'
          }else{
            alert(data)
          }
        },
        error: function(e){
          console.log(e)
        } 
      })
    }
  },

  delete_article: function(){
    let id = $(this).data('id');
    $.ajax({
      url: '/api/article/' + id,
      type: 'DELETE',
      data: {id},
      success: function(data){
        if(data.code == 200){
          alert('删除成功')
          location.reload();
        }else{
          console.log(data)
        }
      },
      error: function(e){
        console.log(e)
      }
    })
  },

  submit_article: function(){
    let islock = true;
    let title = $('#article-input-name').val();
    let sort_id = $('#article-input-sort').val();
    let content = $('#editor1').val();
    if(!title){
      $('#article-input-name').attr({class : 'active'});
      $('.articleEdit-input-name-message').css({'display': 'block'});
      islock = false
    }else{
      $('#article-input-name').attr({class : ''});
      $('.articleEdit-input-name-message').css({'display': 'none'});
    }
    if(islock){
      $.ajax({
        url: '/api/article',
        type: 'POST',
        data: {title,sort_id,content},
        success: function(data){
          if(data.code == 200){
            alert('添加成功')
            location.href = '/admin/article'
          }
        },
        error: function(e){
          console.log(e)
        }
      })
    }
  },

  submit_sort: function(){
    let islock = true;
    let name = $('#sort-input-name').val();
    if(!name){
      $('#sort-input-name').attr({class : 'active'});
      $('.sort-input-name-message').css({'display': 'block'});
      islock = false;
    }else{
      $('#sort-input-name').attr({class : ''});
      $('.sort-input-name-message').css({'display': 'none'});
    }
    if(islock){
      $.ajax({
        url: '/api/sort',
        type: 'POST',
        data: {name},
        success: function(data){
          if(data.code == 200){
            alert('添加成功');
            location.href = '/admin/sort'
          }
        },
        error: function(e){
          console.log(e)
        }
      })
    }
  },
  
  delete_sort: function(){
    let id = $(this).data('id');
    $.ajax({
      url: '/api/sort/' + id,
      type: 'DELETE',
      data: {id},
      success: function(data){
        if(data.code == 200){
          alert('删除成功');
          location.reload();
        }else{
          console.log(data)
        }
      },
      error: function(e){
        console.log(e)
      }
    })
  },
  edit_sort: function(){
    let id = $(this).data('id')
    let name = $('#sortEdit-input-name').val();
    $.ajax({
      url: '/api/sort/' + id,
      type: 'PUT',
      data: {name},
      success: function(data){
        if(data.code == 200){
          alert('修改成功')
          location.href = '/admin/sort'
        }else{
          console.log(data)
        }
      },
      error: function(e){
        console.log(e)
      }
    })
  },

  delete_user: function(){
    let id = $(this).data('id');
    $.ajax({
      url: '/api/user/' + id,
      type: 'DELETE',
      data: {id},
      success: function(data){
        if(data.code == 200){
          alert('删除成功');
          location.reload();
        }else{
          console.log(data)
        }
      },
      error: function(e){
        console.log(e)
      }
    })
  },

  edit_user: function(){
    let islock = true;
    let id = $(this).data('id');
    let name = $('#userEdit-input-name').val();
    if(!(/^[\u4e00-\u9fff\w]{2,10}$/.test(name))){
      $('#userEdit-input-name').attr({class:' active'});
      $('.sort-input-name-message').css({'display':'block'});
      islock = false;
    }else{
      $('#userEdit-input-name').attr({class:''});
      $('.sort-input-name-message').css({'display':'none'});
    }

    let phone = $('#userEdit-input-phone').val();
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){
      $('#userEdit-input-phone').attr({class:'active'});
      $('.sort-input-phone-message').css({'display':'block'});
      islock = false;
    }else{
      $('#userEdit-input-phone').attr({class:''});
      $('.sort-input-phone-message').css({'display':'none'});
    }

    let password = $('#userEdit-input-password').val();
    if(!(/^[^\u4e00-\u9fa5]{6,16}$/.test(password))){
      $('#userEdit-input-password').attr({class:'active'});
      $('.sort-input-password-message').css({'display':'block'});
      islock = false;
    }else{
      $('#userEdit-input-password').attr({class:''});
      $('.sort-input-password-message').css({'display':'none'});
    }

    if(islock){
      $.ajax({
        url: '/api/user/' + id,
        type: 'PUT',
        data: {name,phone,password},
        success: function(data){
          if(data.code == 200){
            alert('编辑成功');
            location.href = '/admin/user'
          }else{
            console.log(data)
          }
        },
        error: function(e){
          console.log(e)
        }
      })
    }
  },

  submit_user: function(){
    let islock = true;
    let name = $('#sort-input-name').val();
    if(!(/^[\u4e00-\u9fff\w]{2,10}$/.test(name))){
      $('#sort-input-name').attr({class:' active'});
      $('.sort-input-name-message').css({'display':'block'});
      islock = false;
    }else{
      $('#sort-input-name').attr({class:''});
      $('.sort-input-name-message').css({'display':'none'});
    }

    let phone = $('#sort-input-phone').val();
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){
      $('#sort-input-phone').attr({class:'active'});
      $('.sort-input-phone-message').css({'display':'block'});
      islock = false;
    }else{
      $('#sort-input-phone').attr({class:''});
      $('.sort-input-phone-message').css({'display':'none'});
    }

    let password = $('#sort-input-password').val();
    if(!(/^[^\u4e00-\u9fa5]{6,16}$/.test(password))){
      $('#sort-input-password').attr({class:'active'});
      $('.sort-input-password-message').css({'display':'block'});
      islock = false;
    }else{
      $('#sort-input-password').attr({class:''});
      $('.sort-input-password-message').css({'display':'none'});
    }

    if(islock){
      $.ajax({
        url: '/api/user',
        type: 'POST',
        data: {name,phone,password},
        success: function(data){
          if(data.code == 200){
            alert('添加成功');
            location.href = "/admin/user"
          }else{
            console.log(data)
          }
        },
        error: function(e){
          console.log(e)
        }
      })
    }
  }
}
PAGE.init();