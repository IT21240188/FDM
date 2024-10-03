import pandas as pd
from sklearn.model_selection import train_test_split
from imblearn.combine import SMOTEENN
from sklearn.svm import SVC

import pickle

df = pd.read_csv('preprocessed_Churn_data.csv')

x = df.drop(columns = ['Churn'])
y = df['Churn'].values

smoteenn = SMOTEENN(random_state=42)
X_smoteenn, y_smoteenn = smoteenn.fit_resample(x, y)

x_train, x_test, y_train, y_test = train_test_split(X_smoteenn, y_smoteenn, test_size=0.2, shuffle = True)

#SVM Model Trainig
svm_model = SVC(kernel='rbf', C=1.0, gamma='auto')
svm_model.fit(x_train, y_train)

pickle.dump(svm_model, open('SVM.pkl', 'wb'))