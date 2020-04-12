const userModules = require('./../models/userModels');

const loginCtrl = {
  login: async function(req,res,next){
    console.log(123)
    let phone = req.body.phone;
    let password = req.body.password;
    if(!phone || !password){
      res.json({code:0,data:"参数错误"})
      return
    }
    try{
      const users = await userModules.where({phone,password});
      console.log(users)
      const user = users[0]
      if(user){
        res.json({code: 200,message:'登陆成功'})
      }else{
        res.json({code:0,message:'登陆失败'})
      }
    }catch(e){
      console.log(e)
      res.json({code:0,message:'系统问题请管理员处理'})
    }
  },
  renderLogin: async function(req,res,next){
    res.render('admin/login')
  }
}

module.exports = loginCtrl