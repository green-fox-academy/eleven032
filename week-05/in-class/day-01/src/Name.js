import React from 'react';
import { connect } from 'react-redux';
function Name() {
    return (
        <div className='container'>
            <h1>{name}</h1>
            <input type='text'></input>
            <button onClick={() => { }}>Change the name</button>
        </div>
    )
}

const NameWithRedux = connect(mapStateProps, MapDispatchToProps)(Name);



export default Name