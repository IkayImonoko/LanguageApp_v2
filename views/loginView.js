function loginView() {
    let message;
    if (model.inputs.userpage.userId) {
        message = /*HTML*/`
            <h1>Hello to the ${getUser(model.inputs.userpage.userId).name}´s userpage</h1>
            <button onclick='handleLogout()'>Log out</button>
        `;
    }
    else {
        message = /*HTML*/`              
            <label for='username'>Username</label>
            <input type='text' id='username' oninput='setLoginUsernameInput(this.value)'>
            <br>
            <label for='password'>Password</label>
            <input type='password' id='password' oninput='setLoginPasswordInput(this.value)'>
            <br>
            <button onclick='handleLogin()'>Login</button>
        `;
    }
    return message;
}