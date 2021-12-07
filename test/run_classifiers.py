import pandas as pd
import numpy as np
import math as math

from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

from sklearn.decomposition import PCA

from sklearn.linear_model import LogisticRegression

from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import cross_validate
from sklearn.utils import shuffle
from sklearn import metrics

import matplotlib.pyplot as plt

def run_random_forest(full_df, feature_names):
    # Random Forest with k-fold cross validation

    X = full_df.iloc[:, :-1]
    y = full_df.iloc[:, -1]

    # Evaluating the quality of a model’s predictions using scoring parameter
    kf = KFold(n_splits=5, random_state=1, shuffle=True)
    rf = RandomForestClassifier()

    a = 0
    f1 = 0

    i = 0

    for train_ix, test_ix in kf.split(X):
        print("train with partition " + str(i) + "...")
        X_train, X_test = X.iloc[train_ix, :], X.iloc[test_ix, :]
        y_train, y_test = y.iloc[train_ix], y.iloc[test_ix]

        rf = rf.fit(X_train, y_train)
        y_pred = rf.predict(X_test)

        a += metrics.accuracy_score(y_test, y_pred)
        f1 += metrics.f1_score(y_test, y_pred)
        i += 1
            
        # plot feature importance 
        importances = rf.feature_importances_
        std = np.std([tree.feature_importances_ for tree in rf.estimators_], axis=0)

        forest_importances = pd.Series(importances, index=feature_names)
        fig, ax = plt.subplots()
        forest_importances.plot.bar(yerr=std, ax=ax)
        ax.set_title("Feature importances using MDI")
        ax.set_ylabel("Mean decrease in impurity")
        fig.tight_layout()
        plt.show()

    a /= 5
    f1 /= 5

    print("Average Accuracy: ", a, "Average F1 Score: ", f1)

def run_svm(full_df):
    # Random Forest with k-fold cross validation

    X = full_df.iloc[:, :-1]
    y = full_df.iloc[:, -1]

    # Evaluating the quality of a model’s predictions using scoring parameter
    kf = KFold(n_splits=5, random_state=1, shuffle=True)
    clf = SVC()

    a = 0
    f1 = 0

    i = 0

    for train_ix, test_ix in kf.split(X):
        print("train with partition " + str(i) + "...")
        X_train, X_test = X.iloc[train_ix, :], X.iloc[test_ix, :]
        y_train, y_test = y.iloc[train_ix], y.iloc[test_ix]

        clf.fit(X_train, y_train)
        y_pred = clf.predict(X_test)

        a += metrics.accuracy_score(y_test, y_pred)
        f1 += metrics.f1_score(y_test, y_pred)
        i += 1

    a /= 5
    f1 /= 5

    print("Average Accuracy: ", a, "Average F1 Score: ", f1)

def run_adaboost(full_df, feature_names):
    # Random Forest with k-fold cross validation

    X = full_df.iloc[:, :-1]
    y = full_df.iloc[:, -1]

    # Evaluating the quality of a model’s predictions using scoring parameter
    kf = KFold(n_splits=5, random_state=1, shuffle=True)
    clf = AdaBoostClassifier()

    a = 0
    f1 = 0

    i = 0

    for train_ix, test_ix in kf.split(X):
        print("train with partition " + str(i) + "...")
        X_train, X_test = X.iloc[train_ix, :], X.iloc[test_ix, :]
        y_train, y_test = y.iloc[train_ix], y.iloc[test_ix]

        clf.fit(X_train, y_train)
        y_pred = clf.predict(X_test)

        a += metrics.accuracy_score(y_test, y_pred)
        f1 += metrics.f1_score(y_test, y_pred)
        i += 1
            
        # plot feature importance 
        importances = clf.feature_importances_
        std = np.std([tree.feature_importances_ for tree in clf.estimators_], axis=0)

        forest_importances = pd.Series(importances, index=feature_names)
        fig, ax = plt.subplots()
        forest_importances.plot.bar(yerr=std, ax=ax)
        ax.set_title("Feature importances using MDI")
        ax.set_ylabel("Mean decrease in impurity")
        fig.tight_layout()
        plt.show()

    a /= 5
    f1 /= 5

    print("Average Accuracy: ", a, "Average F1 Score: ", f1)


