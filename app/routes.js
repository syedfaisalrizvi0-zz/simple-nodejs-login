module.exports = (app)=>{
    var controller = require('./controller.js');
    app.get('/',(req,res)=>{
      res.sendFile('public/index.html')
    });
    app.post('/login',controller.login);
    app.get('/home',controller.home);
    app.get('/loout',(req,res)=>{
    req.session.distroy((err)=>{
     res.redirect('/')
    });
    });
}
