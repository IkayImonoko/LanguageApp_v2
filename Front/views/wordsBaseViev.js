function wordsBaseView() {

    var wordPairsHTML = `
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                <th>Russian</th>
                <th>Norwegian</th>
                </tr>
            </thead>
            <tbody id="wordTableBody">
    `;
    wordPairsHTML += model.data.words ? model.data.words.map((w) => ` <tr><td>${w.russian}</td> <td>${w.norwegian}</td></tr>`).join('') : '';
    wordPairsHTML += `
        </tbody>
        </table>
        </div>
    `;
    return wordPairsHTML;
}