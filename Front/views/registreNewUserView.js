function registreNewUserView(){
    return /*HTML*/ `
    <div>
    <div><label for="name">Name</label></div><div><input id="name"  oninput = "model.inputs.registreNewUser.name = this.value"></div>
    <div><label for="email">Email</label></div><div><input id="email" oninput = "model.inputs.registreNewUser.email = this.value"></div>
    <div><label for="password">Password</label></div><div><input id="password" oninput = "model.inputs.registreNewUser.password = this.value"></div>
    <div><button onclick = "sendNewUserToApi()">Registre</button></div>
    </div>
    `;
}