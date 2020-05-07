import React from 'react';

import { connect } from 'react-redux';

const Loading = ({ loading }) => (
    <div>{loading ? <p>Loading</p>: <p></p>}</div>
)

const mapStateToProps = ({ loading }) => ({
    loading
})

export default connect(mapStateToProps)(Loading)