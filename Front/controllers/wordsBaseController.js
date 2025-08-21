function handleCheckbox(id) {
    var arr = model.inputs.wordsbase.selectedWords;
    arr.includes(id) ? arr.splice(arr.indexOf(id), 1) : arr.push(id);
    mainView();
}
