import React, { useState } from 'react';
import { connect } from 'react-redux';
import { set } from '../actions/counterAction'

function Setter({ counter, handleChange }) {
    const [inputNumber, setInputNumber] = useState('');
    return (
        <div className="container">
            <h1>The Setter</h1>
            <input type="text"
                value={inputNumber}
                onChange={(event) => setInputNumber(event.target.value)}
            />
            <button onClick={()=>handleChange(inputNumber)}>Set</button>
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
        handleChange: (counter) => dispatch(set(counter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setter);