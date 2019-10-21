import React from 'react';
import { connect } from 'react-redux';


function Counter({ combination }) {
    return (
        <div className="container">
            <h1>Complex Counter</h1>
            {combination.counter + combination.tags.length}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        combination: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleChange: (inputTag) => dispatch(removeTag(inputTag))
//     }
// }

export default connect(mapStateToProps)(Counter);