function userpageView() {
    let currentUser = model.data.users.find(user => user.id === model.inputs.userpage.userId);

    let tableRows = '';
    //let level = currentUser.levelId;
    if (currentUser) {
        tableRows = model.data.events.reduce((result, event) => {
            if (event.userId === currentUser.id) {
                return result + `<tr><td>${getWord(event.wordId).russian}/${getWord(event.wordId).norwegian}</td><td>${getPogress(event.progressId).name}</td></tr>`
            }
            return result;
        }, '');
    }
    return /*HTML*/ `
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

