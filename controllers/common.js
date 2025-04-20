function getUser(id) {
    return model.data.users.find(x => { return x.id === id });
}