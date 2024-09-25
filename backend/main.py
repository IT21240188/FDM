from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
import pickle
import sys
import logging

app = Flask(__name__)
CORS(app)  # To allow React frontend to communicate with Flask backend

# Use Randomforest pre-trained model
with open('Random_forest.pkl', 'rb') as f:
    Randomforest_model = pickle.load(f)

# Load the saved scaler
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

# Load the saved label encoders
with open('label_encoders.pkl', 'rb') as f:
    label_encoders = pickle.load(f)
    

def object_to_int(dataframe_series, column_name=None):
    if dataframe_series.dtype == 'object':
        le = label_encoders.get(column_name)
        if le:
            dataframe_series = le.transform(dataframe_series)
    return dataframe_series

@app.route('/predict', methods=['POST'])
def submit():
    try:
        # Get features from the frontend
        features = request.get_json().get('features', {})

        # Desired order of the fields
        ordered_keys = [
            "SeniorCitizen",
            "Partner",
            "Dependents",
            "tenure",
            "OnlineSecurity",
            "OnlineBackup",
            "DeviceProtection",
            "TechSupport",
            "Contract",
            "PaperlessBilling",
            "PaymentMethod",
            "MonthlyCharges",
            "TotalCharges"
        ]
        # Create a new dictionary with the desired order
        ordered_features = {key: features.get(key, '') for key in ordered_keys}
        # Convert features to DataFrame
        features_df = pd.DataFrame([ordered_features])

        # Loop through each row in the DataFrame
        for index, row in features_df.iterrows():
            print(f"Row {index + 1}:")
            
            # Print each attribute (column) and its value
            for column in features_df.columns:
                value = row[column]
                dtype = features_df[column].dtype
                print(f"  {column}: {value} (Type: {dtype})")
            
            print("\n")

        # Identify integer columns to scale
        int_columns = features_df.select_dtypes(include=['int64', 'int32', 'float64']).columns
                
        # Scale only the integer columns
        features_df[int_columns] = scaler.transform(features_df[int_columns])
        print("After scaling integer columns:", features_df)

        # Apply label encoding to necessary categorical columns
        for column in features_df.columns:
            features_df[column] = object_to_int(features_df[column], column_name=column)
        print("After label encoding:")
        # Loop through each row in the DataFrame
        for index, row in features_df.iterrows():
            print(f"Row {index + 1}:")
            
            # Print each attribute (column), its value, and its data type
            for column in features_df.columns:
                value = row[column]
                dtype = features_df[column].dtype
                print(f"  {column}: {value} (Type: {dtype})")
            
            print("\n")
        

        # Make prediction using the pre-trained model
        prediction = Randomforest_model.predict(features_df)
        print("Prediction:", prediction)

        # Return the prediction result as JSON
        return jsonify({'prediction': int(prediction[0])})
    
    except Exception as e:
        print("Error during prediction:", str(e))  # Print error message
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)