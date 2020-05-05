import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

const SideBar = ({ modules, toggleLesson }) => (
    <aside>
        <h1>Modules</h1>
        {
            modules.map(module => (
                <div key={module.id}>
                    <h2>{module.title}</h2>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>
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

const mapStateToProps = state => ({
    modules: state.course.modules
})

/*
We use mapDispacthToProps to map the dispacth functions into a propertie on the scope

We use bindActionCreator when the arguments on the dispach function as the same 
as the action function will receive. Insted we use the function above:

    toggleLesson: (module, lesson) =>
        dispatch(CourseActions.toggleLesson(module, lesson))

We use that another one:

    bindActionCreators(CourseActions, dispatch);

as our toggleLesson in the scope has the same value on the CourseActions, that will works
*/
const mapDispacthToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch);

// connect uses the concpet high order component, pattern to share data between components
// connect receive as first argument an function, a function that returns state properties
export default connect(mapStateToProps, mapDispacthToProps)(SideBar)