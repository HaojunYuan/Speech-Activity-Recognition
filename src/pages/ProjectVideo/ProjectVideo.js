import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    tempWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'10%'
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
}));

const ProjectVideo = ({ tagChange }) => {
    const classes = useStyles();
    //const theme = useTheme();



    return (
        <div className={classes.tempWrapper}>
            <Header></Header>
            <Typography>
                In progress
            </Typography>
        </div>
    )
}

export default ProjectVideo;