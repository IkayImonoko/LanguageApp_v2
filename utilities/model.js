const model = {
    app: {
        page: 'userpage'
    },
    inputs: {

    },
    data: {
        users: [
            { id: 0, levelId: 0, name: 'Nikita', email: 'nikita@gmail.com', password: '123' },
            { id: 1, levelId: 0, name: 'Sigrid', email: 'sigrid@gmail.com', password: '456' },
        ],
        levels: [
            { id: 0, name: 'Level 1' },
            { id: 1, name: 'Level 2' },
        ],
        words: [
            { id: 0, russian: 'привет', norwegian: 'hi' },
            { id: 1, russian: 'столяр', norwegian: 'snekker' }
        ],
        levelsContents: [
            { id: 0, livelId: 0, wordId: 0 },
            { id: 1, livelId: 0, wordId: 1 },
        ],
        progresses: [
            { id: 0, name: 'First view' },
            { id: 1, name: 'Started' },
            { id: 2, name: 'In progress' },
            { id: 3, name: 'Repitition' },
            { id: 4, name: 'Lerned' }
        ],
        usersProgresses: [
            { id: 0, userId: 0, wordId: 0, progressId: 4 },
            { id: 1, userId: 0, wordId: 1, progressId: 4 },
            { id: 2, userId: 1, wordId: 0, progressId: 1 },
            { id: 3, userId: 1, wordId: 1, progressId: 1 },
        ]
    }
}