import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/counterAction'

function Resetter({ counter, handleChange }) {
    return (
        <div className="container">
            <h1>The Resetter</h1>

            <button onClick={handleChange}>Reset</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter);