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
        <label for ="ruInput" >Russian</label>
        <input id="ruInput" placeholder = "${model.inputs.addword.russian ?? ''}" onchange ="model.inputs.addword.russian = this.value">
        <label for ="noInput">Norvegian</label>
        <input id="noInput" placeholder = "${model.inputs.addword.norwegian ?? ''}" onchange ="model.inputs.addword.norwegian = this.value">
        <label for ="categoryInput">Category</label>
        <input id="categoryInput" placeholder = "${model.inputs.addword.category ?? ''}" onchange ="model.inputs.addword.category = this.value">
    </div>
    <button onclick="sendWordPairToApi()">New word</button>
    `;
    wordPairsHTML += addNewWordHTML;

    return wordPairsHTML;
}