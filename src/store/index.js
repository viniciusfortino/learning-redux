import { createStore } from 'redux';

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
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
//when is the first time the reducers run, we need to pass to it the inicital state 
function reducer(state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case 'TOGGLE_LESSON':
            return {
                ...state,
                activeModule: action.module,
                activeLesson: action.lesson
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;