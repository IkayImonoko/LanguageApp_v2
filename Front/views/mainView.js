function mainView() {
    let page = model.app.page;
    let currentPageView = '';
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
    if (page === 'wordsBase') {
        document.getElementById("wordsTable").scrollTop = parseInt(localStorage.getItem("tableScroll"));
    }
}