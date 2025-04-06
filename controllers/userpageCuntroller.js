function getWord(id) {
    for (const word of model.data.words) {
        if (word.id === id) {
            return word;
        }
    }
}

function getPogress(id) {
    for (const progress of model.data.progresses) {
        if (progress.id === id) {
            return progress;
        }
    }
}