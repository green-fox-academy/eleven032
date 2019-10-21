import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../actions/tagAction';

function RemoveTag({ tags, handleChange }) {

    return (
        <div className="container">
            <h1>Remove Tag</h1>
            {tags.map((tag, i) => {
                return <h3 key={i} onClick={(event) => handleChange(event.target.textContent)}>{tag}</h3>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (inputTag) => dispatch(removeTag(inputTag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag);