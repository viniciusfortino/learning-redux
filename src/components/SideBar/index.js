import React, { Component } from 'react';

import { connect } from 'react-redux';

const SideBar = ({ modules }) => (
    <aside>
        <h1>Modules</h1>
        {
            modules.map(module => (
                <div key={module.id}>
                    <h2>{module.title}</h2>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}</li>
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