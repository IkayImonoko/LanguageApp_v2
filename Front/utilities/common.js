

function setLoginUsernameInput(value){
    model.inputs.login.username = value;
}

function setLoginPasswordInput(value){
    model.inputs.login.password = value;
}

function switchPage(page){
    model.app.page = page;
    mainView();
}