function registreNewUserView(){
    return /*HTML*/ `
    <div>
    <div><input oninput = "model.inputs.registreNewUser.name = this.value"></div>
    <div><input oninput = "model.inputs.registreNewUser.email = this.value"></div>
    <div><input oninput = "model.inputs.registreNewUser.password = this.value"></div>
    <div><button onclick = "sendNewUserToApi()">Registre</button></div>
    </div>
    `;
}