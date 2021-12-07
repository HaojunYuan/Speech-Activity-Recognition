import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
//import { Link } from 'react-router-dom';
//import ButtonBase from '@material-ui/core/ButtonBase';
import mainFig from "../../img/speech.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  titleFormat: {
    paddingBottom: "10px",
    textDecoration: "none",
    color: "#212F3C",
    //fontFamily: '-apple-system',
  },
  titleParagraphFormat: {
    fontFamily: "-apple-system",
    paddingTop: "20px",
  },
  imageFormat: {
    width: "50%",
    height: "50%",
    paddingBottom: "20px",
  },
  boxFormat: {
    width: "80%",
    paddingBottom: "30px",
  },
}));

const Landing = () => {
  const classes = useStyles();
  //const theme = useTheme();

  return (
    <div className={classes.wrapper}>
      <Header></Header>
      <Box className={classes.boxFormat}>
        <Typography align="center" variant="h3" className={classes.titleFormat}>
          Speech Activity Detection
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          className={classes.titleParagraphFormat}
        >
          Since the introduction of Siri, voice assistants have hugely impacted
          people's experience with intelligent systems. However, this sudden fad
          comes with challenges, with the most obvious one being distinguishing
          human voice from background noises and silence, which necessitates
          novel approaches to speech detection. To serve this endeavor, our
          project utilizes machine learning methods to perform human speech
          recognition against complex noise scenarios.
        </Typography>
      </Box>
      <img className={classes.imageFormat} src={mainFig} alt="..."></img>
    </div>
  );
};

export default Landing;
