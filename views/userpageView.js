function userpageView() {
    let currentUser;
    for (const user of model.data.users) {
        if (user.id === model.inputs.userpage.userId) {
            currentUser = user;
            break
        }
    }
    return /*HTML*/ `
        Hello from ${currentUser.name}´s userpage
        `;
}