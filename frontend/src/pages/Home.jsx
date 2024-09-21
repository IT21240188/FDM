import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import toast from 'react-hot-toast';
import HomePageStyle from '../styles/HomePageStyle.module.css';
import Button from '@mui/material/Button';
import { Row } from 'react-bootstrap';

const Home = () => {
  const [Gender, setGender] = useState('');
  const [SeniorCitizen, setSeniorCitizen] = useState('');
  const [Partner, setPartner] = useState('');
  const [Dependents, setDependents] = useState('');
  const [Tenure, setTenure] = useState('');
  const [PhoneService, setPhoneService] = useState('');
  const [MultipleLines, setMultipleLines] = useState('');
  const [InternetService, setInternetService] = useState('');
  const [OnlineSecurity, setOnlineSecurity] = useState('');
  const [OnlineBackup, setOnlineBackup] = useState('');
  const [DeviceProtection, setDeviceProtection] = useState('');
  const [TechSupport, setTechSupport] = useState('');
  const [StreamingTV, setStreamingTV] = useState('');
  const [StreamingMovies, setStreamingMovies] = useState('');
  const [Contract, setContract] = useState('');
  const [PaperlessBilling, setPaperlessBilling] = useState('');
  const [PaymentMethod, setPaymentMethod] = useState('');
  const [MonthlyCharges, setMonthlyCharges] = useState('');
  const [TotalCharges, setTotalCharges] = useState('');

  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    setPrediction('');
  }, []);

  const submitHandler = async () => {
    const customerdata = {
      gender: Gender,
      SeniorCitizen: SeniorCitizen,
      Partner: Partner,
      Dependents: Dependents,
      tenure: Tenure,
      PhoneService: PhoneService,
      MultipleLines: MultipleLines,
      InternetService: InternetService,
      OnlineSecurity: OnlineSecurity,
      OnlineBackup: OnlineBackup,
      DeviceProtection: DeviceProtection,
      TechSupport: TechSupport,
      StreamingTV: StreamingTV,
      StreamingMovies: StreamingMovies,
      Contract: Contract,
      PaperlessBilling: PaperlessBilling,
      PaymentMethod: PaymentMethod,
      MonthlyCharges: MonthlyCharges,
      TotalCharges: TotalCharges,
    };

    console.log('Sending data:', customerdata);

    const url = 'http://127.0.0.1:5000/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerdata),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        // Checks for status 200-299
        const data = await response.json();

        console.log('Response is', data);
        alert('Form submitted successfully!');
        setPrediction(data.Churn);
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`); // Use error message from backend
      }
    } catch (error) {
      console.error('Request failed', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={HomePageStyle.bodyDiv}>
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '3%',
          marginRight: '15%',
        }}
      >
        <Row>
          <Row>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                SeniorCitizen
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={SeniorCitizen}
                onChange={(e) => setSeniorCitizen(e.target.value)}
                label="SeniorCitizen"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Partner
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Partner}
                onChange={(e) => setPartner(e.target.value)}
                label="Partner"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Dependents
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Dependents}
                onChange={(e) => setDependents(e.target.value)}
                label="Partner"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-basic"
              label="Tenure"
              variant="standard"
              value={Tenure}
              required
              onChange={(e) => setTenure(e.target.value)}
            />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                PhoneService
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={PhoneService}
                onChange={(e) => setPhoneService(e.target.value)}
                label="PhoneService"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                MultipleLines
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={MultipleLines}
                onChange={(e) => setMultipleLines(e.target.value)}
                label="MultipleLines"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No phone service">No phone service</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                InternetService
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={InternetService}
                onChange={(e) => setInternetService(e.target.value)}
                label="InternetService"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Fiber optic">Fiber optic</MenuItem>
                <MenuItem value="DSL">DSL</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                OnlineSecurity
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={OnlineSecurity}
                onChange={(e) => setOnlineSecurity(e.target.value)}
                label="OnlineSecurity"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                OnlineBackup
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={OnlineBackup}
                onChange={(e) => setOnlineBackup(e.target.value)}
                label="OnlineBackup"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                DeviceProtection
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={DeviceProtection}
                onChange={(e) => setDeviceProtection(e.target.value)}
                label="DeviceProtection"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                TechSupport
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={TechSupport}
                onChange={(e) => setTechSupport(e.target.value)}
                label="TechSupport"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                StreamingTV
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={StreamingTV}
                onChange={(e) => setStreamingTV(e.target.value)}
                label="StreamingTV"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                StreamingMovies
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={StreamingMovies}
                onChange={(e) => setStreamingMovies(e.target.value)}
                label="StreamingMovies"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="No internet service">
                  No internet service
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Contract
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Contract}
                onChange={(e) => setContract(e.target.value)}
                label="Contract"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Month-to-month">Month-to-month</MenuItem>
                <MenuItem value="Two year">Two year</MenuItem>
                <MenuItem value="One year">One year</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                PaperlessBilling
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={PaperlessBilling}
                onChange={(e) => setPaperlessBilling(e.target.value)}
                label="PaperlessBilling"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                PaymentMethod
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={PaymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                label="PaymentMethod"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Electronic check">Electronic check</MenuItem>
                <MenuItem value="Mailed check">Mailed check</MenuItem>
                <MenuItem value="Bank transfer (automatic)">
                  Bank transfer (automatic)
                </MenuItem>
                <MenuItem value="Credit card (automatic)">
                  Credit card (automatic)
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-basic"
              label="MonthlyCharges"
              variant="standard"
              value={MonthlyCharges}
              required
              onChange={(e) => setMonthlyCharges(e.target.value)}
            />

            <TextField
              id="standard-basic"
              label="TotalCharges"
              variant="standard"
              value={TotalCharges}
              required
              onChange={(e) => setTotalCharges(e.target.value)}
            />
          </Row>

          <Row>
            <center>
              <Button type="submit" variant="contained" onClick={submitHandler}>
                Check
              </Button>
            </center>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Home;
