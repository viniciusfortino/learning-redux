import React, { Component } from 'react';

import { connect } from 'react-redux';

/*
An action must have a key type, that say what the action to be used and must be inique
after the key type, we can send any data.
we use Dispacth function to send actions to redux, and that actions will be listened by all reducers 
in out application
*/
function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }
}

const SideBar = ({ modules, dispatch }) => (
    <aside>
        <h1>Modules</h1>
        {
            modules.map(module => (
                <div key={module.id}>
                    <h2>{module.title}</h2>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                                <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                                    Select
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </aside>
);

// connect uses the concpet high order component, pattern to share data between components
// connect receive as first argument an function, a function that returns state properties
export default connect(state => ({
    modules: state.modules
}))(SideBar)