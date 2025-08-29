function mainView() {
    let page = model.app.page;
    let currentPageView = '';

    model.inputs.userpage.userId = parseInt(localStorage.getItem("loggedInUser")) ?? null;
    
    switch (page) {
        case 'userpage':
            currentPageView = userpageView();
            break;
        case 'wordsBase':
            currentPageView = wordsBaseView();
            break;
        case 'registreNewUser':
            currentPageView = registreNewUserView();
            break;
    }

    
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id='mainContainer'>
            <header>
                ${loginView()}
                ${getSwitchingPageBarHTML()}
            </header>
            <main>
                ${currentPageView}
            </main>
            <footer>
            </footer>
        </div>
    `;
    init();
}