function loginView() {
    let message;
    if (model.inputs.userpage.userId) {
        message = `<h1>Hello to the ${getUser(model.inputs.userpage.userId).name}´s userpage</h1>`;
    }
    else {
        message = /*HTML*/`              
            <label for='username'>Username</label>
            <input type='text' id='username' oninput='model.inputs.login.username = this.value'>
            <br>
            <label for='password'>Password</label>
            <input type='password' id='password' oninput='model.inputs.login.password = this.value'>
            <br>
            <button onclick='handleLogin()'>Login</button>
        `;
    }
    return message;
}