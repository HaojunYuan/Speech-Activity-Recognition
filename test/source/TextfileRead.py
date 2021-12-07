import os
import sys
import textgrid
import numpy as np


def GetTextData(path, sampling_rate, audio_matrix):
    annotation_path = path
    # Test with Female and PTDB_TUG data
    FemalePTDB_annotation_path = os.path.join(annotation_path, "Male", "PTDB-TUG")
    os.chdir(FemalePTDB_annotation_path)
    Groundtruth = np.zeros_like(audio_matrix)
    Groundtruth = LoadFile(FemalePTDB_annotation_path, Groundtruth, sampling_rate)
    return Groundtruth



def LoadFile(directory_path, dummy_matrix, sampling_rate):
    if not os.path.isdir(directory_path):
        print("No such file directory")
    dirs = os.listdir(directory_path)
    # sort the file order
    dirs.sort()
    for idx, file in enumerate(dirs):
        if os.path.splitext(file)[1] != ".TextGrid":
            continue
        #print("TEXT FILE: ", file)
        tg = textgrid.TextGrid.fromFile(file)
        row = dummy_matrix[idx, :]
        for interval in tg[0]:
            if interval.mark == "1":
                start_time = interval.minTime
                end_time = interval.maxTime
                row[int(start_time * sampling_rate) : int(end_time * sampling_rate)] = 1
        #break
    return dummy_matrix





if __name__=="__main__":
    GetTextData()