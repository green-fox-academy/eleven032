import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchData from '../utilities/fetchData';

function PostsList(props) {
    const [posts, setPosts] = useState(props.posts);

    useEffect(() => {
        setPosts(fetchData())
    }, [])
    return (
        <div className="container">
            <h1>Posts</h1>
            {posts.map((post, i) => {
                return <h3 key={i}>{post}</h3>
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchData: dispatch(fetchData)
//     }
// }
export default connect(mapStateToProps)(PostsList);