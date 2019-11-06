import React from 'react';

class Upvote extends React.Component {
    render() {
        return <button onClick={() => { this.props.vote(1) }} />
    }
}

export default Upvote; 