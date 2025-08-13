function getUser(id) {
    return model.data.users.find(x => { return x.id === id });
}

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

function getUserLevel(id) {
    const user = model.data.users.find(x => x.id === id);
    return user ? user.levelId : null;
}

function getLevelName(id) {
    const level = model.data.levels.find(x => x.id === id);
    return level ? level.name : '';
}