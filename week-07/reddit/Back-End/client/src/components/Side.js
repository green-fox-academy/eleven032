import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}));


function Side() {
    const classes = useStyles();
    return (
        <div className="side">
            <Link to='/submit' className='link'>
                <Button variant="contained" color="primary" className={classes.button}>
                    SUBMIT A NEW POST
                </Button>
            </Link>
        </div>
    )
}

export default Side;