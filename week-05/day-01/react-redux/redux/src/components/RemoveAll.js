import React from 'react';
import { connect } from 'react-redux';
import { removeTags } from '../actions/tagAction';

function RemoveTags({ handleChange }) {

    return (
        <div className="container">
            <h1>Remove Tag</h1>
            <button onClick={() => { handleChange() }}>Remove all tags</button>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: () => dispatch(removeTags())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTags);