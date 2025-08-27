const model = {
    app: {
        page: 'wordsBase',
        pages: ['wordsBase', 'userpage', 'registreNewUser']
    },
    inputs: {
        userpage: {
            userId: null,
        },
        login: {
            username: null,
            password: null
        },
        addword: {
            russian: null,
            norwegian: null,
            category: null
        },
        wordsbase: {
            changingInputs: [],
            selectedWords: [],
        },

    },
    data: {
        users: [
            { id: 1, levelId: 1, name: 'Nikita', email: 'nikita@gmail.com', password: '123' },
            { id: 2, levelId: 1, name: 'Sigrid', email: 'sigrid@gmail.com', password: '456' },
            { id: 3, levelId: 1, name: 'Peter', email: 'peter@gmail.com', password: '789' },
            { id: 4, levelId: 1, name: 'Stian', email: 'stian@gmail.com', password: '321' },
            { id: 5, levelId: 1, name: 'Pol', email: 'pol@gmail.com', password: '654' },
            { id: 6, levelId: 1, name: 'Tim', email: 'tim@gmail.com', password: '987' },
        ],
        levels: [
            { id: 1, name: 'Level 1' },
            { id: 2, name: 'Level 2' },
        ],
        words: [
            
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
            { id: 5, name: 'Learned' }
        ],
        events: [
            { id: 1, userId: 1, wordId: 1, progressId: 4 },
            { id: 2, userId: 1, wordId: 2, progressId: 5 },
            { id: 3, userId: 2, wordId: 1, progressId: 1 },
            { id: 4, userId: 3, wordId: 1, progressId: 1 },
        ]
    }
}