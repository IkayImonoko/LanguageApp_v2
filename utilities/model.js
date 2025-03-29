const model = {
    app: {
        page: 'userpage'
    },
    inputs: {
        userpage: {
            userId: 0
        }
    },
    data: {
        users: [
            { id: 1, levelId: 1, name: 'Nikita', email: 'nikita@gmail.com', password: '123' },
            { id: 2, levelId: 1, name: 'Sigrid', email: 'sigrid@gmail.com', password: '456' },
            { id: 3, levelId: 1, name: 'Peter', email: 'peter@gmail.com', password: '789' },
            { id: 4, levelId: 1, name: 'Sian', email: 'stian@gmail.com', password: '321' },
        ],
        levels: [
            { id: 1, name: 'Level 1' },
            { id: 2, name: 'Level 2' },
        ],
        words: [
            { id: 1, russian: 'привет', norwegian: 'hi' },
            { id: 2, russian: 'столяр', norwegian: 'snekker' }
        ],
        levelsContents: [
            { id: 1, livelId: 1, wordId: 1 },
            { id: 2, livelId: 1, wordId: 2 },
        ],
        progresses: [
            { id: 1, name: 'First view' },
            { id: 2, name: 'Started' },
            { id: 3, name: 'In progress' },
            { id: 4, name: 'Repitition' },
            { id: 5, name: 'Lerned' }
        ],
        usersProgresses: [
            { id: 1, userId: 1, wordId: 1, progressId: 4 },
            { id: 2, userId: 1, wordId: 2, progressId: 4 },
            { id: 3, userId: 2, wordId: 1, progressId: 1 },
            { id: 4, userId: 3, wordId: 1, progressId: 1 },
        ]
    }
}