function mainView() {
    let page = model.app.page;
    let currentPageView = '';
    switch (page) {
        case 'userpage':
            currentPageView = userpageView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id='mainContainer'>
            <header>
                <label for='username'>Username</label>
                <input type='text' id='username' oninput='model.inputs.login.username = this.value'>
                <br>
                <label for='password'>Password</label>
                <input type='password' id='password' oninput='model.inputs.login.password = this.value'>
                <br>
                <button onclick='handleLogin()'>Login</button>
            </header>
            <main>
                ${currentPageView}
            </main>
            <footer>
            footer
            </footer>
        </div>
    `; 
}