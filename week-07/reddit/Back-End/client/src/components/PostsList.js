import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../utilities/fetchData';
import Post from './Post';
import './PostsList.css';

function PostsList(props) {
    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className="container">
            <h1>Posts</h1>
            {props.posts.map((post) => 
                 <Post key={"post-"+post.id} id={post.id} title={post.title} timestamp={post.timestamp} score={post.score} />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);