import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from imblearn.over_sampling import SMOTE

from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform

import pickle

df = pd.read_csv('preprocessed_Churn_data.csv')

X = df.drop(columns = ['Churn'])
y = df['Churn'].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Apply SMOTE
smote = SMOTE(random_state=42)
X_train_smote, y_train_smote = smote.fit_resample(X_train, y_train)


param_distributions = {
    'penalty': ['l1', 'l2'],  # Regularization type
    'C': uniform(0.01, 10),  # Regularization strength (inverse)
    'max_iter': [100, 200, 300],  # Number of iterations
    'solver': ['liblinear', 'saga'],  # Solvers to consider
}

# Define the logistic regression model
model_lr = LogisticRegression(random_state=42)

# Create the RandomizedSearchCV object
random_search = RandomizedSearchCV(estimator=model_lr,
                                   param_distributions=param_distributions,
                                   n_iter=100,  # Number of random combinations to try
                                   scoring='accuracy',  # Evaluation metric
                                   cv=5,  # 5-fold cross-validation
                                   verbose=2,  # to see the progress
                                   n_jobs=-1,  # use all available cores
                                   random_state=42)  # Ensure reproducibility

# Fit the model using the training data
random_search.fit(X_train_smote, y_train_smote)

pickle.dump(model_lr, open('LG.pkl', 'wb'))