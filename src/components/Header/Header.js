import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  fab: {
    alignItems: 'center',
  },
  image: {
    height: 'auto',
    width: '4%',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  button: {
    textTransform: 'none',
    color: 'primary',
  },
  rightJustify: {
    marginLeft: "auto",
    marginRight: '0%',
  },
  leftJustify: {
    marginRight: "auto",
    marginLeft: '0%',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color={'secondary'}>
          <Toolbar>
            <section classeName={classes.leftJustify}>
                <Link to="/" className={classes.link} >
                  <Button className={classes.button}>
                  <Typography color = 'primary'>CS4641 Project: Speech Activity Detection</Typography>
                  </Button>
                </Link>
            </section>
            <section className = {classes.rightJustify}>
              <Box display="flex" flexDirection="row" justifyContent='space-between'>
              <Box p = {1}>
                <Link to="/proposal" className={classes.link} >
                  <Button className={classes.button}>
                    <Typography>Proposal</Typography>
                  </Button>
                </Link>
              </Box>
              <Box p = {1}>
                <Link to="/midtermUpdate" className={classes.link} >
                  <Button className={classes.button}>
                    <Typography>Midterm Update</Typography>
                  </Button>
                </Link>
              </Box>
              <Box p = {1}>
                <Link to="/finalUpdate" className={classes.link} >
                  <Button className={classes.button}>
                    <Typography>Final Update</Typography>
                  </Button>
                </Link>
              </Box>
              <Box p = {1}>
                <Link to="/references" className={classes.link} >
                  <Button className={classes.button}>
                    <Typography>References</Typography>
                  </Button>
                </Link>
              </Box>
              </Box>
            </section>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

/*
              <Box p = {1}>
                <Link to="/projectVideo" className={classes.link} >
                  <Button className={classes.button}>
                    <Typography>Project Video</Typography>
                  </Button>
                </Link>
              </Box>
*/
