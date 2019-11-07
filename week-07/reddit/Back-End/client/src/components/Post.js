import React from 'react';
import Vote from './Vote';
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import './Post.css';
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));
function Post(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className="postContainer">
                <div className="vote">
                    <Vote score={props.score} id={props.id} />
                </div>
                <div className="content">
                    <Content title={props.title} timestamp={props.timestamp} />
                </div>

            </div>
        </Paper>

    )
}
export default Post;