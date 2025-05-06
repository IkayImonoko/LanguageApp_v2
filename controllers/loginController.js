function handleLogin(){
    let user = model.data.users.find(x => {return x.name === model.inputs.login.username && x.password === model.inputs.login.password});
    if(user){
        model.inputs.userpage.userId = user.id;
    }
    model.inputs.login.username = null;
    model.inputs.login.password = null;
    
    mainView();
}

function handleLogout(){
    model.inputs.userpage.userId  = null;
    mainView();
}