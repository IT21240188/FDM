import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from imblearn.combine import SMOTEENN

import pickle

df = pd.read_csv('preprocessed_Churn_data.csv')

x = df.drop(columns = ['Churn'])
y = df['Churn'].values


smoteenn = SMOTEENN(random_state=42)
X_smoteenn, y_smoteenn = smoteenn.fit_resample(x, y)

x_SEtrain, x_SEtest, y_SEtrain, y_SEtest = train_test_split(X_smoteenn, y_smoteenn, test_size=0.2, shuffle = True)

model_rf = RandomForestClassifier()
model_rf.fit(x_SEtrain,y_SEtrain)

pickle.dump(model_rf, open('Random_forest.pkl', 'wb'))