import React from 'react';
import Vote from './Vote';
import Content from './Content';
function Post(props) {
    return (
        <div className="postContainer">
            <Vote score={props.score} id={props.id} />
            <Content title={props.title} timestamp={props.timestamp} />
        </div>
    )
}
export default Post;