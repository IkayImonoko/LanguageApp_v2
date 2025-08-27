function getSwitchingPageBarHTML() {
    var result = '';
    model.app.pages.forEach(x => result += /*HTML*/`
        <button onclick="switchPage('${x}')">${x}</button>
        `);
    return /*HTML*/`<div class="switchingPageBar">${result}<div>`;
}