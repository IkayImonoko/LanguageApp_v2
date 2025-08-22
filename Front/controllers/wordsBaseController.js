function handleCheckbox(id) {
    var arr = model.inputs.wordsbase.selectedWords;
    arr.includes(id) ? arr.splice(arr.indexOf(id), 1) : arr.push(id);
    mainView();
}

function handleChangeToggle(wordPair) {
    var arr = model.inputs.wordsbase.changingInputs;
    const index = arr.findIndex(item => item.id === wordPair.id);

    if (index !== -1) {
        arr.splice(index, 1);
    } else {
        arr.push(wordPair);
    }
    //console.log(wordPair);
    mainView();
}
