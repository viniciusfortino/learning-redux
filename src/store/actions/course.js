/*
    actions are actions that we pass to redux, saying that we need to change the state
    An action must have a key type, that say what the action to be used and must be inique
    after the key type, we can send any data.
    we use Dispacth function to send actions to redux, and that actions will be listened by all reducers 
    in out application
*/
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }
}