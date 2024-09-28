import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier  # Import DecisionTreeClassifier
from imblearn.combine import SMOTEENN
import pickle

# Load the dataset
df = pd.read_csv('preprocessed_Churn_data.csv')

# Split data into features (x) and target (y)
x = df.drop(columns=['Churn'])
y = df['Churn'].values

# Apply SMOTEENN to handle imbalanced data
smoteenn = SMOTEENN(random_state=42)
X_smoteenn, y_smoteenn = smoteenn.fit_resample(x, y)

# Split the resampled data into training and testing sets
x_SEtrain, x_SEtest, y_SEtrain, y_SEtest = train_test_split(X_smoteenn, y_smoteenn, test_size=0.2, shuffle=True)

# Initialize and train the Decision Tree Classifier
model_dt = DecisionTreeClassifier()  # Use DecisionTreeClassifier
model_dt.fit(x_SEtrain, y_SEtrain)

# Save the trained model as a pickle file
pickle.dump(model_dt, open('Decision_tree.pkl', 'wb'))
