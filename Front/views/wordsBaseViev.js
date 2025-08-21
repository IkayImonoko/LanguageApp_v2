function wordsBaseView() {

    var wordPairsHTML = /*HTML*/`
    <div id="wordsTable" class="table-wrapper" onscroll='localStorage.setItem("tableScroll", this.scrollTop)'>
        <table>
            <thead>
                <tr>
                <th></th>
                <th>Russian</th>
                <th>Norwegian</th>
                <th>Category</th>
                </tr>
            </thead>
            <tbody id="wordTableBody">
    `;
    
    wordPairsHTML += model.data.words ? model.data.words.map((w) => ` <tr><td><input type="checkbox" onchange="handleCheckbox(${w.id})" ${model.inputs.wordsbase.selectedWords.includes(w.id) ? 'checked': ''}></td> 
                                                                        <td>${w.russian}</td> 
                                                                        <td>${w.norwegian}</td> 
                                                                        <td>${w.category}</td></tr>`).join('') : '';
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
    <button onclick="deleteWordPairsTroughApi()" ${model.inputs.wordsbase.selectedWords.length > 0 ? 'enabled' : 'disabled'}>Delete</button>
    `;
    wordPairsHTML += addNewWordHTML;

    return wordPairsHTML;
}