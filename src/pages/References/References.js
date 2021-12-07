import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components';
//import { Link } from 'react-router-dom';

import ref from "../../img/references.png";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'2%'
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    titleFormat: {
        paddingBottom:'10px',
        textDecoration: "none",
        color:'#212F3C',
        //fontFamily: '-apple-system',
    },
    paragraphFormat: {
        fontFamily: '-apple-system',
    },
    boxFormat: {
        width: '70%',
    },
}));

const References = ({ tagChange }) => {
    const classes = useStyles();
    //const theme = useTheme();



    return (
        <div className={classes.wrapper}>
            <Header></Header>
            <Box className={classes.boxFormat}>
            <Typography align = 'center' variant = 'h4' className={classes.titleFormat}>
                References
            </Typography>
            </Box>
            <img className={classes.imageFormat} src={ref} alt="..."></img>
        </div>
    )
}

export default References;