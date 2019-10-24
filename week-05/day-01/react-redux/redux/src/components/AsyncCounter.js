import React, { useState } from 'react';
import { connect } from 'react-redux';
import { asyncIncreaseHelper } from '../actions/counterAction'

function AsyncCounter({ counter, handleChange }) {
    const [inputNum, setInputNum] = useState('');
    const [inputSec, setInputSec] = useState('');
    return (
        <div className="container">
            <h1>Async Incrementer</h1>
            {counter}
            <br />
            <input type="text"
                value={inputNum}
                onChange={(event) => setInputNum(event.target.value)}
            />
            <br />
            <input type="number"
                value={inputSec}
                onChange={(event) => setInputSec(event.target.value)}
            />
            <button onClick={() => handleChange(inputNum, inputSec)}>Async Way</button>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (inputNum, inputSec) => dispatch(asyncIncreaseHelper(inputNum, inputSec))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncCounter);