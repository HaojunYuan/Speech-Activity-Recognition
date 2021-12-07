import DataProcessing
import TextfileRead
import librosa
import numpy as np
import os
import pandas as pd
from scipy import signal
from Features import *


def main():
    parent_dir = os.getcwd()
    datapath = os.path.join(parent_dir, "..", "Data", "Audio")
    annotation_path = os.path.join(parent_dir, "..", "Data", "Annotation")
    audio_matrix, sr = DataProcessing.GetAudioData(datapath)
    text_matrix = TextfileRead.GetTextData(annotation_path, sr, audio_matrix)
    # Now extract features for the given data path
    """
    NOT CONSIDER TIME FRAME WINDOW FOR NOW, SO ALL FEATHER EXTRACTION USING THE WHOLE AUDIO AS TIMEFRAME
    """
    print("Audio Matrix Size: ", audio_matrix.shape)
    print("Test matrix Size: ", text_matrix.shape)
    feature_list = ["zcr", "rms", "spectral_centroid", "spectral_rolloff", "spectral_flux", "spectral_crest", "mfcc"]
    # Create a feature matrix with row number as num of audios and col num as feature nums
    # Notice though we have only 6 features in list, first five except mfcc has one value, last mfcc feature has 7 params
    #feature_matrix = np.full((audio_matrix.shape[0], len(feature_list) + 6), fill_value=0.)
    feature_matrix = {}
    feature_matrix_idx = 0
    hop = 1024
    block = 2048
    for idx, audio in enumerate(audio_matrix):
        text = text_matrix[idx]
        #print("AUDIO LENGTH: ", len(audio))
        #print("TEXT LENGTH: ". len(text))
        # Erase the zeros we concatenate
        interval_start = 0
        # Extract power spectrogram
        freqs, tArr, X = signal.spectrogram(audio, nperseg=block, noverlap=hop, mode='magnitude')
        while (interval_start + 2048 < audio_matrix.shape[1]):
        #while (interval_start + 2048 < len(audio)):
            #print("AUDIO: ", audio)
            #audio_sample = audio[0: np.where(audio == 0)[0][-1]]
            audio_sample = audio[interval_start : interval_start + 2048]
            text_sample = text[interval_start : interval_start + 2048]
            #print("Auio Sample: ", audio_sample)
            feature_list = []
            zcr = librosa.feature.zero_crossing_rate(audio_sample, frame_length=2048)
            #feature_list.append(np.average(zcr))
            rms = librosa.feature.rms(audio_sample, frame_length=2048)
            #feature_list.append(np.average(rms))
            spectral_centroid = librosa.feature.spectral_centroid(audio_sample, sr)
            #feature_list.append(np.average(spectral_centroid))
            # spectral_flux = FeatureSpectralFlux(audio_sample, sr)
            # print(spectral_flux.shape)
            # feature_list.append(spectral_flux)
            spectral_rolloff = librosa.feature.spectral_rolloff(audio_sample, sr)
            #feature_list.append(np.average(spectral_rolloff))
            spectral_flux = FeatureSpectralFlux(X, sr)
            spectral_crest = FeatureSpectralCrestFactor(X, sr)
            mfcc = librosa.feature.mfcc(audio_sample, sr, n_mfcc=13)
            #print("MFCC size: ", mfcc.shape)
            mfcc_list = list(np.average(mfcc, axis=1))
            #feature_list += list(np.average(mfcc, axis=1))

            ground_truth = np.sum(text_sample) > 1024
            #print("SUM: ", np.sum(audio_sample))
            if np.sum(audio_sample) != 0:
                feature_matrix[feature_matrix_idx] = {'zcr': np.average(zcr), 'rms': np.average(rms), 'spectral_cetroid': np.average(spectral_centroid), 'spectral_rolloff': np.average(spectral_rolloff), 'spectral_flux': np.average(spectral_flux), 'spectral_crest': np.average(spectral_crest),'mfcc 1': mfcc_list[0], 'mfcc 2': mfcc_list[1], 'mfcc 3': mfcc_list[2], 'mfcc 4': mfcc_list[3], 'mfcc 5': mfcc_list[4], 'mfcc 6': mfcc_list[5], 'mfcc 7': mfcc_list[6], 
                                                'mfcc 8': mfcc_list[7], 'mfcc 9': mfcc_list[8], 'mfcc 10': mfcc_list[9], 'mfcc 11': mfcc_list[10], 'mfcc 12': mfcc_list[11], 'mfcc 13': mfcc_list[12], 'ground_truth': ground_truth}

            #feature_matrix[feature_matrix_idx] = {'audio_sample': audio_sample, 'zcr': np.average(zcr), 'rms': np.average(rms), 'spectral_cetroid': np.average(spectral_centroid), 'spectral_rolloff': np.average(spectral_rolloff), 'mfcc 1': mfcc_list[0], 'mfcc 2': mfcc_list[1], 'mfcc 3': mfcc_list[2], 'mfcc 4': mfcc_list[3], 'mfcc 5': mfcc_list[4], 'mfcc 6': mfcc_list[5], 'mfcc 7': mfcc_list[6], 'ground_truth': ground_truth}
            #print("Feature List: ", feature_list)
            #print("Sample%d feature extraction finished!" %feature_matrix_idx)
            #feature_matrix[feature_matrix_idx, :] = feature_list

            feature_matrix_idx += 1
            interval_start += hop
    os.chdir(parent_dir)
    df = pd.DataFrame.from_dict(feature_matrix)
    df = df.T

    #print(df)
    df.to_csv('Male-PTDB.csv', index = True, header = True)
    #print(feature_matrix)



if __name__ == "__main__":
    main()
