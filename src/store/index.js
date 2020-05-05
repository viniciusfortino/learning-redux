import { createStore } from 'redux';

const INITIAL_STATE = {
    modules: [
        {
            id: 1,
            title: "First module",
            lessons: [
                {
                    id: 1,
                    title: "First Class"
                },
                {
                    id: 2,
                    title: "Second Class"
                },
                {
                    id: 3,
                    title: "Third Class"
                },
            ]
        },
        {
            id: 2,
            title: "Seconde module",
            lessons: [
                {
                    id: 1,
                    title: "First Class"
                },
                {
                    id: 2,
                    title: "Second Class"
                },
                {
                    id: 3,
                    title: "Third Class"
                },
            ]
        }
    ]
}

//function that returns the current state
function reducer() {
    return INITIAL_STATE;
}

const store = createStore(reducer);

export default store;