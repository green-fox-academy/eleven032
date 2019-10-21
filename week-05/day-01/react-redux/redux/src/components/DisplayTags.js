import React from 'react';
import { connect } from 'react-redux';


function DisplayTags({ tags }) {
    return (
        <div className="container">
            <h1>Tags</h1>
            {tags.map((tag, i) => {
                return <h3 key={i}>{tag}</h3>
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        tags: state.tags
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleChange: () => dispatch(display())
//     }
// }

export default connect(mapStateToProps)(DisplayTags);