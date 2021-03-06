import React from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions/counterAction'
function Increaser({ counter, handleChange }) {
    return (
        <div className="container">
            <h1>The Increaser</h1>
            <h3>{counter}</h3>
            <button onClick={handleChange}>Increase</button>
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
        handleChange: () => dispatch(increase())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);