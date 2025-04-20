function handleLogin(){
    let user = model.data.users.find(x => {return x.name === model.inputs.login.username && x.password === model.inputs.login.password});
    if(user){
        model.inputs.userpage.userId = user.id;
    }
    mainView();
}