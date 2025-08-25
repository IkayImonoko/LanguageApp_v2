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

function handleUppdateInput(id, type, newValue) {
    const index = model.inputs.wordsbase.changingInputs.findIndex(item => item.id === id);
    switch (type) {
        case 'russian':
            model.inputs.wordsbase.changingInputs[index].russian = newValue;
            break;
        case 'norwegian':
            model.inputs.wordsbase.changingInputs[index].norwegian = newValue;
            break;
        case 'category':
            model.inputs.wordsbase.changingInputs[index].category = newValue;
            break;
    }
}