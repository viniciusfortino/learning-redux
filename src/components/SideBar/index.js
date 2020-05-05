import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course';

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
                                <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>
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
    modules: state.course.modules
}))(SideBar)