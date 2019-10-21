import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/tagAction';

function AddTag({ tags, handleChange }) {
    const [inputTag, setInputTag] = useState('');
    return (
        <div className="container">
            <h1>Add Tag</h1>
            <input type="text"
                value={inputTag}
                onChange={(event) => setInputTag(event.target.value)}
            />
            <button onClick={() => handleChange(inputTag)}>Add</button>
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
        handleChange: (inputTag) => dispatch(add(inputTag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);