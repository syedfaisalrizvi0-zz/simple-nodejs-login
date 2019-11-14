const path  = require('path')
exports.login = (req,res)=>{
    var username  = req.body.username;
    var password = req.body.password;
    if(username == 'user' && password == 'pass'){
        req.session.loggin = true;
        req.session.username = username
        res.redirect('/home');
    }
    else{
        res.redirect('back');
    }
}
exports.home = (req,res)=>{
    res.sendFile(path.resolve(__dirname)+'/public/home.html')
}