import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import ref from "../../img/references.png";
//import { Link } from 'react-router-dom';

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
  lateTitleFormat: {
    paddingTop: "20px",
    paddingBottom: "10px",
    textDecoration: "none",
    color: "#212F3C",
    //fontFamily: '-apple-system',
  },
  titleParagraphFormat: {
    fontFamily: "-apple-system",
  },
  titleParagraphFormat2: {
    fontFamily: "-apple-system",
    padding: "15px",
  },
  boxFormat: {
    width: "70%",
    paddingBottom: "30px",
  },
  imgwrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2%",
  },
}));

const Proposal = ({ tagChange }) => {
  const classes = useStyles();
  //const theme = useTheme();

  return (
    <div className={classes.wrapper}>
      <Header></Header>
      <Box className={classes.boxFormat}>
        <Typography align="center" variant="h4" className={classes.titleFormat}>
          Introduction/Background
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Since the introduction of Siri, voice assistants have hugely impacted
          people's experience with intelligent systems. However, this sudden fad
          comes with challenges, with the most obvious one being distinguishing
          human voice from background noises and silence, which necessitates
          novel approaches to speech detection. To serve this endeavor, our
          project utilizes machine learning methods to perform human speech
          recognition against complex noise scenarios.
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Problem Statement
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          The fundamental problem is a binary classification. Given an audio
          source, we aim to distinguition the time intervals containing human
          speeches from the rest. Additionally, we would filter out background
          noises of timestamps that are identified as containing speeches.
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Method
        </Typography>
        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Dataset
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          - Speech activity detection dataset from Kaggle: 3 sets of data, 738
          files in total with their annotations<br></br>- Florida Bandmaster
          Association (FBA) dataset<br></br>
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Working Process
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          For training, accurate annotation of the segment boundaries separating
          noise, silence, and speech part is required and essential. The dataset
          we select includes annotation files in praat-textgrids form, so we
          first need to write a data-preprocessing file to read in these files
          and build a groundtruth matrix specifying labels of different parts of
          the audio. Meanwhile, we need to read in the audio file and create a
          sliding window moving on it, extracting features like mfcc and
          spectral flux from different time intervals. The next step is to feed
          our data to the pre-defined model to let the machine learn. We will
          split our dataset to two parts, maybe 80% for training and 20% for
          testing. Lastly, we will employ different evaluation methods in class
          to access our model.
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          {" "}
          Training Method
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Noise, silence and human speech have very different audio features. To
          distinguish them, we need to first understand how musical features map
          input datapoints to their groups before later applying these rules to
          classify hidden, or unseen inputs. <br></br>
          We will compare the performances of popular classification algorithms
          and then improve the winning model based on our specific use scenario.
          <br></br>
          <br></br> General Approach: Supervised Learning
          <br></br> Candidate Models: SVM, Random Forest, CNN [1] <br></br>
          Related Libraries: Numpy, Sklearn, Librosa<br></br>
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Potentional Results and Evaluation
        </Typography>
        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Potential Results
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Our first goal is to build a model that takes in an audio file,
          detects human speech activity and labels the corresponding time
          intervals. It will then filter any noise within these intervals and
          output clean audio. Our model should work with both simple models like
          silence and speech appears in sequence and complex models that human
          speech is mixed with different background noises. The expected
          accuracy rate is 90%.<br></br>
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Evaluation
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Having a small portion of data as testing group, we will deploy
          F-measure we studied in class to compute precision, recall and
          accuracy and evaluate the model based on these statistics.<br></br>
          <br></br>
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Timeline and Team Work Assignment
        </Typography>
        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Proposal (October 7th)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Dataset, approach, report - October 3rd
          <br></br>
          Review cotent and finish proposal - October 7th
          <br></br>
          <br></br>
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Midterm Report (November 16th)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Research and architectural design (Team) - October 15th
          <br></br>
          Data collection and preprocessing (Haojun, Yulong) - October 31st
          <br></br>
          Train and validate first approach and finish report after evaluation
          (Bruce, Zeyu, Yulai) - November 16th
          <br></br>
          Further improve our model by adjusting parameters and optimizing the
          code (Team) - November 21th
          <br></br>
          <br></br>
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Final Report (December 7th)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          Add distinguishing feature of approach (Team) - November 25th
          <br></br>
          Review entire project and finish final report (Team) - December 7th
          <br></br>
          <br></br>
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          References
        </Typography>
        <div className={classes.imgwrapper}>
          <img className={classes.imageFormat} src={ref} alt="..."></img>
        </div>
      </Box>
    </div>
  );
};

export default Proposal;
