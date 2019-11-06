import React from 'react';
import { connect } from 'react-redux';
import upIcon from '../utilities/upvoted.png';
import downIcon from '../utilities/downvoted.png';
import upVoteHelper from '../utilities/upVoteHelper';
import downVoteHelper from '../utilities/downVoteHelper';

function Vote(props) {
    function handleClick(event) {
        if (event.target.alt === 'up') {
            props.upVote(props.id);
        } else if (event.target.alt === 'down') {
            props.downVote(props.id);
        }
    }

    return (
        <div className="voteContainer">
            <img src={upIcon} onClick={handleClick} alt='up' />
            <p className="counter">{props.score}</p>
            <img src={downIcon} onClick={handleClick} alt='down' />
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        state: state.posts
    });

const mapDispatchToProps = dispatch => ({
    upVote: (id) => dispatch(upVoteHelper(id)),
    downVote: (id) => dispatch(downVoteHelper(id))
});



export default connect(mapStateToProps, mapDispatchToProps)(Vote);