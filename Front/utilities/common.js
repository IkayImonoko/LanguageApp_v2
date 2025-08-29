

function setLoginUsernameInput(value) {
    model.inputs.login.username = value;
}

function setLoginPasswordInput(value) {
    model.inputs.login.password = value;
}

function switchPage(page) {
    model.app.page = page;
    mainView();
}

function init() {
    if (model.app.page === 'wordsBase') {
        document.getElementById("wordsTable").scrollTop = parseInt(localStorage.getItem("tableScroll"));
    }
}