import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import submitPostHelper from '../utilities/submitPostHelper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    }
}));

function NewPost(props) {
    const classes = useStyles();
    let [input, setInput] = useState({ title: '', url: '' });

    function handleInput(event) {
        if (event.target.name === 'title') {
            setInput({
                ...input,
                title: event.target.value
            });
        } else if (event.target.name === 'url') {
            setInput({
                ...input,
                url: event.target.value
            });
        }
    }

    // function handleSubmit(event) {
    //     console.log(event.target);

    //     if (event.target.name === 'submit') {
    //         props.submitPost(input);
    //     }
    // }



    return (
        // <form className={classes.container} noValidate autoComplete="off">
        <form>
            <div>
                {/* <label>
                    <p>title</p>
                    <input name="title" onChange={handleInput} />
                </label> */}
                <label>
                    <div>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="Title"
                            margin="normal"
                            name="title"
                            onChange={handleInput}
                        />
                    </div>
                </label>

                {/* <label>
                    <p>URL</p>
                    <input name="url" onChange={handleInput} />
                </label> */}
                <label>
                    <div>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="Title"
                            margin="normal"
                            name="url"
                            onChange={handleInput}
                        />
                    </div>
                </label>

            </div>
            <Link to='/'>
                {/* <button name='submit' onClick={handleSubmit}>SUBMIT</button> */}
                <Button variant="contained" color="primary" className={classes.button} onClick={()=>props.submitPost(input)}>
                    SUBMIT
                </Button>
            </Link>
        </form>
    );
}

const mapStateToProps = state => ({
    state: state.posts
});

const mapDispatchToProps = dispatch => ({
    submitPost: (data) => dispatch(submitPostHelper(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);