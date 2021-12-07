import os
import sys

import numpy as np
import librosa


def GetAudioData(path):
    audio_path = path
    # Test with Female and PTDB_TUG data
    FemalePTDB_audio_path = os.path.join(audio_path, "Male", "PTDB-TUG")
    os.chdir(FemalePTDB_audio_path)
    audio_matrix, sampling_rate = LoadAudio(FemalePTDB_audio_path)
    return audio_matrix, sampling_rate


def LoadAudio(path):
    if not os.path.isdir(path):
        print("No such audio directory in the specified path")
    dirs = os.listdir(path)
    # Sort to make sure the file is read in fixed alphabetical order
    dirs.sort()
    audio_list = []
    sample_list = []
    longest_length = 0
    for file in dirs:
        filename = ""
        if os.path.splitext(file)[1] != ".wav":
            continue
        filename = os.path.join(os.getcwd(), file)
        #print("AUDIO FILE: ", file)
        audio, sr = librosa.load(filename)
        audio_list.append(audio)
        sample_list.append(sr)
        print(filename)
        if audio.size > longest_length:
            longest_length = audio.size
        #break

    # Get the average sampling rate and pad zeros to generate audio matrix
    sampling_rate = np.average(sample_list)
    for i in range(len(audio_list)):
        if audio_list[i].size < longest_length:
            audio_list[i] = np.pad(audio_list[i], (0, longest_length - audio_list[i].size),
                                   mode="constant", constant_values=0)
    audio_matrix = np.stack(audio_list, axis=0)
    return audio_matrix, sampling_rate


# if __name__ == "__main__":
#     main()
