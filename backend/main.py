from flask import jsonify, request, url_for, redirect, render_template
import pandas as pd
import pickle
from sklearn.preprocessing import StandardScaler, LabelEncoder
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

model = pickle.load(open("Random_forest.pkl", "rb"))


@app.route('/api/users', methods = ['POST'])
def predict_Churn():
    try:
        data = request.json

        # Extract values from the request
        gender = data.get('gender', '')
        SeniorCitizen = data.get('SeniorCitizen', '')
        Partner = data.get('Partner', '')
        Dependents = data.get('Dependents', '')
        tenure = data.get('tenure', '')
        PhoneService = data.get('PhoneService', '')
        MultipleLines = data.get('MultipleLines', '')
        InternetService = data.get('InternetService', '')
        OnlineSecurity = data.get('OnlineSecurity', '')
        OnlineBackup = data.get('OnlineBackup', '')
        DeviceProtection = data.get('DeviceProtection', '')
        TechSupport = data.get('TechSupport', '')
        StreamingTV = data.get('StreamingTV', '')
        StreamingMovies = data.get('StreamingMovies', '')
        Contract = data.get('Contract', '')
        PaperlessBilling = data.get('PaperlessBilling', '')
        PaymentMethod = data.get('PaymentMethod', '')
        MonthlyCharges = data.get('MonthlyCharges', '')
        TotalCharges = data.get('TotalCharges', '')

        df = preProcess(gender, SeniorCitizen, Partner,Dependents,tenure,PhoneService,MultipleLines,InternetService,OnlineSecurity,OnlineBackup,DeviceProtection,TechSupport,StreamingTV,StreamingMovies,Contract,PaperlessBilling,PaymentMethod,MonthlyCharges,TotalCharges)

        customer_churn_prediction = model.predict(df)

    


        return jsonify({
            "Churn": str(customer_churn_prediction),
        })
    
    except Exception as e:
        # Log the exception and return a 500 response
        print(f"Error occurred: {str(e)}")
        return jsonify({"error": "An unexpected error occurred. Please try again later."}), 500


def preProcess(gender, SeniorCitizen, Partner,Dependents,tenure,PhoneService,MultipleLines,InternetService,OnlineSecurity,OnlineBackup,DeviceProtection,TechSupport,StreamingTV,StreamingMovies,Contract,PaperlessBilling,PaymentMethod,MonthlyCharges,TotalCharges):
    inputs = {'gender': [gender], 'SeniorCitizen': [SeniorCitizen],'Partner': [Partner], 'Dependents': [Dependents],'tenure': [tenure],'PhoneService': [PhoneService],'MultipleLines': [MultipleLines],'InternetService': [InternetService],'OnlineSecurity': [OnlineSecurity],'OnlineBackup': [OnlineBackup],'DeviceProtection': [DeviceProtection],'TechSupport': [TechSupport],'StreamingTV': [StreamingTV],'StreamingMovies': [StreamingMovies],'Contract': [Contract],'PaperlessBilling': [PaperlessBilling],'PaymentMethod': [PaymentMethod],'MonthlyCharges': [MonthlyCharges],'TotalCharges': [TotalCharges]}       
    df = pd.DataFrame(inputs)
    
    def object_to_int(dataframe_series):
        if dataframe_series.dtype=='object':
            dataframe_series = LabelEncoder().fit_transform(dataframe_series)
        return dataframe_series

    df = df.apply(lambda x: object_to_int(x))

    
    num_cols = ["tenure", 'MonthlyCharges', 'TotalCharges']
    scaler= StandardScaler()
    df[num_cols] = scaler.fit_transform(df[num_cols])

    return df



if __name__ == "__main__":
    
    app.run(debug=True)