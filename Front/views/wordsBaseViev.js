function wordsBaseView() {

    var wordPairsHTML = /*HTML*/`
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                <th>Russian</th>
                <th>Norwegian</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody id="wordTableBody">
    `;
    wordPairsHTML += model.data.words ? model.data.words.map((w) => ` <tr><td>${w.russian}</td> <td>${w.norwegian}</td> <td>${w.category}</td></tr>`).join('') : '';
    wordPairsHTML += /*HTML*/`
        </tbody>
        </table>
        </div>
    `;

    var addNewWordHTML = /*HTML*/`
    <div>
        <label for ="ruInput">Russian</label>
        <input id="ruInput">
        <label for ="noInput">Norvegian</label>
        <input id="noInput">
        <label for ="categoryInput">Category</label>
        <input id="categoryInput">
    </div>
    <button>New word</button>
    `;
    wordPairsHTML += addNewWordHTML;

    return wordPairsHTML;
}