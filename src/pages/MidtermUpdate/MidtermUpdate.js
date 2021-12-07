import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import ref from "../../img/references.png";
import evaluationFig from "../../img/performance_evaluation.png";
import featureFig from "../../img/feature_importance.png";
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px",
  },
  tempWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "10%",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  boxFormat: {
    width: "70%",
    //paddingBottom:'20px',
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
    padding: "10px",
  },
  imageFormat: {
    width: "50%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2%",
  },
  imgwrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2%",
  },
}));

const MidtermUpdate = ({ tagChange }) => {
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
          Data Collection
        </Typography>
        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Data Preprocessing
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          To start off the project, we turn raw audio files into tabular data
          through signal processing techniques. In DataProcessing.py, we use
          librosa to load and convert each audio file into a float array. We
          then stack these arrays vertically and pad zero to those with shorter
          length, forming a regular audio matrix, with each row as a different
          audio file. We also return the average sampling rate in this file for
          later use. In TextfileRead.py, we import textgrid and use this to
          generate our groundtruth matrix. We achieve this by first constructing
          a dummy zero matrix with the same shape as the audio matrix. Then we
          read in different annotation files which label out every starting and
          ending time of the human speech. We time each timestamp with the
          sampling rate and get the index of the number we should start labeling
          1. With this method, we go through all textgrid files and generate a
          equal-sized matrix with annotations (labels).
          <br></br>
        </Typography>

        <Typography
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Feature Extraction
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          To capture characteristics of audio files, we decided to generate 11
          features which we think are crucial in classifying audio segment.
          These features are zcr, rms, spectral_centroid, spectral_runoff and 7
          coefficients of mfcc. Zcr describes the rate at which a signal changes
          from positive to negative. Rms stands for root mean square of values
          within the audio matrix. Spectral centroid and spectral flux describe
          the spectrum characteristics of the audio. Mfcc, at last, represents
          Mel Frequency Cepstral Coefficients, which is a series of number
          describing the overall shape of the audio spectral envelope. We notice
          that although not all features are needed to merely separate speech
          audio with silence, some more complicated features, namely, mfcc
          features, should come in handy when non-speech noises are introduced
          to the dataset.
          <br></br>
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat}
        >
          To gain insights into how each feature contributes to this
          classification problem, Figure 1 below shows how each feature
          contributes to decrease in node impurity of our random forest model
          explained in the next section.
          <br></br>
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat} src={featureFig} alt="..."></img>
          </div>
        </Typography>

        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Model Training
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          After pre-processing and feature extraction, we implemented Random
          Forest with K-fold Cross Validation, a supervised method, to test the
          results and evaluating outputs. Since we had 11 individual data
          sources with different features, in order to involve all possible
          situations (Male and Female, with and without background noise), we
          decided to combine all data files to generate one dataset with all
          information, given that all data files have 2 labels only: a row of
          data is labeled either "true" (speech) or "false" (non-speech). We
          then used K-fold cross validation method to split the dataset into 5
          folds, leaving 80% of the data for training, and 20% for testing in
          each of the five trials. For each trial, we applied our evaulation
          metrics (described in the next section) in order to take average in
          the end.
          <br></br>
        </Typography>


        <Typography
          align="center"
          variant="h4"
          className={classes.lateTitleFormat}
        >
          Performance Evaluation
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          We used 5 metrics to evaluate model performance: accuracy, balanced
          accuracy, precision, recall, and F1 score. Evaluation results are
          shown in Figure 2 below. Notice all 5 metrices are the averages of the
          5 cross-validation folds.
          <br></br>
          <div className={classes.imgwrapper}>
          <img
            className={classes.imageFormat}
            src={evaluationFig}
            alt="..."
          ></img>
          </div>
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

export default MidtermUpdate;