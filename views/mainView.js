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
                ${loginView()}
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