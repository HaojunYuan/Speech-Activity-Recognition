import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "../../components";
import ref from "../../img/references.png";
import evaluationFig from "../../img/performance_evaluation.png";
import featureFig from "../../img/feature_importance.png";
import zcrFig from "../../img/zcr.png";
import rmsFig from "../../img/rms.png";
import spectralcentroidFig from "../../img/spectralcentroid.png";
import spectralrolloffFig from "../../img/spectralrolloff.png";
import mfccFig from "../../img/mfcc.png";
import mfccFig2 from "../../img/mfcc2.png";
import spectralcrest from "../../img/spectralcrest.png";
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
  titleParagraphFormat3: {
    fontFamily: "-apple-system",
    padding: "10px",
    fontWeight: "bold",
  },
  titleParagraphFormat4: {
    fontFamily: "-apple-system",
    paddingLeft: "10px",
  },
  imageFormat: {
    width: "50%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2%",
  },
  imageFormat3: {
    width: "70%",
    height: "70%",
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
  refwrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  refFormat: {
    width: "70%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const FinalUpdate = ({ tagChange }) => {
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
          These features are zcr, rms, spectral_centroid, spectral_runoff and 13
          coefficients of mfcc. The various features that we have extracted are explained
          below. These features are common features that are associated with sound recognition 
          and spectrogram analysis. The goal of the project is to separate speech audio from silences,
          we have noted that not all these features would be needed but as we are including data with noises,
          features such as mfcc improved the model when non-speech noises are introduced.
          <br></br>
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
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
          align="left"
          variant="h5"
          className={classes.titleParagraphFormat}
        >
          Feature Explaination [4]
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat2}
        >
          All Ks here refer to the size of the processing block. And X(i) refers to the signal value generated by the Librosa load() function.
          <br></br>
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Zero Crossing Rate (ZCR)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          ZCR is a low-level feature describing the number of changes of sign in consecutive blocks of the audio samples.
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat2} src={zcrFig} alt="..."></img>
          </div>
          This function describes how often the signal content changes its sign in the block. The bigger this value is, the more likely that this block contains human voice / sound (any high-frequency content).
        </Typography>

          <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Root Mean Square (RMS)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          RMS is also a low-level feature describing the intensity of the audio signal. 
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat2} src={rmsFig} alt="..."></img>
          </div>
          This function describes the root mean square of the signal value in a certain block. The higher this value is, the more likely there is audio in this time period. It also helps smooth out the audio, as the sharp increase of signal value will be smoothed out by other numbers in the same time range.
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Spectral Centroid
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          Spectral Centroid describes the center of gravity of the spectral energy, which is defined as the frequency-weighted sum of the power spectrum. 
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat2} src={spectralcentroidFig} alt="..."></img>
          </div>
          This feature describes the ratio of high-frequency to low-frequency in the certain block.
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Spectral Rolloff
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          The spectral rolloff measures the bandwidth of the analyzed block. It is described as the frequency bin below which the magnitudes of the short-time Fourier Transform of the x(i) reaches a certain percentage of the overall magnitude. Basically, it defines how much energy is lied under a specific frequency. 
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat} src={spectralrolloffFig} alt="..."></img>
          </div>
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Mel-Frequency Cepstral Coefficients (MFCC)
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat} src={mfccFig} alt="..."></img>
          </div>
          <br></br>
          MFCC is a series of coefficients describing the shape of the spectrogram of the audio. The jth coefficient is calculated using the following formula.
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat2} src={mfccFig2} alt="..."></img>
          </div>
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Spectral Flux
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          Spectral flux defines the amount of change of the spectral shape, which is usually calculated by the average different between Fourier Transform frames. Spectral flux is also a good indicator describing the spectrogram shape of the audio signal.
        </Typography>

        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat3}
        >
          Spectral Crest
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          className={classes.titleParagraphFormat4}
        >
          Spectral crest factor measures the tonal characteristic. It compares the maximum magnitude of the power spectrum with the sum of the magnitude spectrum. 
          <div className={classes.imgwrapper}>
          <img className={classes.imageFormat2} src={spectralcrest} alt="..."></img>
          </div>
          <br></br>
          Tonal characteristic generally refers to the ratio between tonal components and noisy components.
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
        <div className={classes.refwrapper}>
          <img className={classes.refFormat} src={ref} alt="..."></img>
        </div>
      </Box>
    </div>
  );
};

export default FinalUpdate;
