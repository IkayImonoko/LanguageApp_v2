function mainView() {
    let page = model.app.page;
    let currentPageView = '';
    switch (page) {
        case 'userpage':
            currentPageView = userpageView();
            break;
    }

    document.getElementById('app').innerHTML = /*HTML*/ `
        ${currentPageView}
    `; 
}