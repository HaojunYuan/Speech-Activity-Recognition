import numpy as np

# This piece of code is from the online repo of Prof.Alexander Lerch
def FeatureSpectralCrestFactor(X, f_s):

    norm = X.sum(axis=0)
    if np.ndim(X) == 1:
        if norm == 0:
            norm = 1
    else:
        norm[norm == 0] = 1

    vtsc = X.max(axis=0) / norm

    return (vtsc)

def FeatureSpectralFlux(X, f_s):

    # difference spectrum (set first diff to zero)
    X = np.c_[X[:, 0], X]

    afDeltaX = np.diff(X, 1, axis=1)
    # flux
    vsf = np.sqrt((afDeltaX**2).sum(axis=0)) / X.shape[0]

    return (vsf)

def FeatureSpectralCentroid(X, f_s):

    # X = X**2 removed for consistency with book

    norm = X.sum(axis=0, keepdims=True)
    norm[norm == 0] = 1

    vsc = np.dot(np.arange(0, X.shape[0]), X) / norm

    # convert from index to Hz
    vsc = vsc / (X.shape[0] - 1) * f_s / 2

    return np.squeeze(vsc)