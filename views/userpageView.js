function userpageView() {
    let currentUser;
    for (const user of model.data.users) {
        if (user.id === model.inputs.userpage.userId) {
            currentUser = user;
            break
        }
    }

    let tableRows = '';
    let level = currentUser.levelId;
    for (const event of model.data.events) {
        if (event.userId === currentUser.id) {
            let word = '';
            let progress = '';
            word = getWord(event.wordId);
            progress = getPogress(event.progressId);
            tableRows += `<tr><td>${word.russian}/${word.norwegian}</td><td>${progress.name}</td></tr>`
        }
    }
    return /*HTML*/ `
        <h1>Hello to the ${currentUser.name}´s userpage</h1>
        your level is ${getLevelName(getUserLevel(model.inputs.userpage.userId))}
        <table>
            <tr>
                <th>Word</th>
                <th>Progress</th>
            </tr>
                ${tableRows}
        </table>
        `;
}

