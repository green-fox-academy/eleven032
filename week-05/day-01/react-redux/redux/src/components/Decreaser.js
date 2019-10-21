import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../actions/counterAction'

function Decreaser({ counter, handleChange }) {
    return (
        <div className="container">
            <h1>The Decreaser</h1>
            <h3>{counter}</h3>
            <button onClick={handleChange}>Decrease</button>
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
        handleChange: () => dispatch(decrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser);