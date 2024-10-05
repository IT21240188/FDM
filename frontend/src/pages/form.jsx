import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import toast from 'react-hot-toast';

const form = () => {
  const [features, setFeatures] = useState({
    SeniorCitizen: '',
    Partner: '',
    Dependents: '',
    TechSupport: '',
    PaperlessBilling: '',
    OnlineSecurity: '',
    OnlineBackup: '',
    DeviceProtection: '',
    Contract: '',
    PaymentMethod: '',
    tenure: '',
    MonthlyCharges: '',
    TotalCharges: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [errors, setErrors] = useState({});

  const handleRadioChange = (e, field) => {
    setFeatures({
      ...features,
      [field]: e.target.value,
    });
  };

  // Handle input changes and parse specific fields as integers
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert specific fields to integers
    const parsedValue = ['tenure', 'MonthlyCharges', 'TotalCharges'].includes(
      name
    )
      ? parseInt(value, 10)
      : value;

    setFeatures({
      ...features,
      [name]: parsedValue,
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFeatures({
      ...features,
      [name]: value,
    });
  };
  console.log(features);

  const validateForm = () => {
    const newErrors = {};
    Object.keys(features).forEach((key) => {
      if (!features[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send features to backend for prediction
  const handlePredict = () => {
    if (!validateForm()) {
      toast.error('All fields Required!')
      return;
    }
    axios
      .post('http://127.0.0.1:5000/predict', { features })
      .then((response) => {
        console.log('predict', response.data.prediction);
        setPrediction(response.data.prediction);
      })
      .catch((error) => {
        console.error('There was an error making the prediction!', error);
      });
  };

  return (
    <Container className="mt-4" style={{}}>
      <center>
        <Typography variant="h4" gutterBottom>
          Customer Churn Predict
        </Typography>
      </center>
      <Row>
        <Col>
          <Container
            maxWidth="sm"
            style={{
              margin: '0px',
              backgroundColor: '#e2f0f1',
              borderRadius: '10px',
              padding: '40px 20px',
            }}
          >
            <Row className="mb-3">
              <Col>
                <FormControl required error={!!errors.SeniorCitizen}>
                  <FormLabel id="SeniorCitizen">Senior Citizen</FormLabel>
                  <RadioGroup
                    row
                    name="SeniorCitizen"
                    value={features.SeniorCitizen}
                    onChange={(e) => handleRadioChange(e, 'SeniorCitizen')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col>
                <FormControl required error={!!errors.Partner}>
                  <FormLabel id="Partner">Partner</FormLabel>
                  <RadioGroup
                    row
                    name="Partner"
                    value={features.Partner}
                    onChange={(e) => handleRadioChange(e, 'Partner')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col>
                <FormControl required error={!!errors.Dependents}>
                  <FormLabel id="Dependents">Dependents</FormLabel>
                  <RadioGroup
                    row
                    name="Dependents"
                    value={features.Dependents}
                    onChange={(e) => handleRadioChange(e, 'Dependents')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <FormControl required error={!!errors.OnlineSecurity}>
                  <FormLabel id="OnlineSecurity">Online Security</FormLabel>
                  <RadioGroup
                    row
                    name="OnlineSecurity"
                    value={features.OnlineSecurity}
                    onChange={(e) => handleRadioChange(e, 'OnlineSecurity')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col>
                <FormControl required error={!!errors.OnlineBackup}>
                  <FormLabel id="OnlineBackup">Online Backup</FormLabel>
                  <RadioGroup
                    row
                    name="OnlineBackup"
                    value={features.OnlineBackup}
                    onChange={(e) => handleRadioChange(e, 'OnlineBackup')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col>
                <FormControl required error={!!errors.DeviceProtection}>
                  <FormLabel id="DeviceProtection">Device Protection</FormLabel>
                  <RadioGroup
                    row
                    name="DeviceProtection"
                    value={features.DeviceProtection}
                    onChange={(e) => handleRadioChange(e, 'DeviceProtection')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth size="small" required error={!!errors.Contract}>
                    <InputLabel id="Contract">Contract</InputLabel>
                    <Select
                      labelId="Contract"
                      name="Contract"
                      value={features.Contract}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Month-to-month">Month-to-month</MenuItem>
                      <MenuItem value="Two year">Two year</MenuItem>
                      <MenuItem value="One year">One year</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Col>
              <Col>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth size="small" required error={!!errors.PaymentMethod}>
                    <InputLabel id="PaymentMethod">Payment Method</InputLabel>
                    <Select
                      labelId="PaymentMethod"
                      name="PaymentMethod"
                      value={features.PaymentMethod}
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Electronic check">
                        Electronic check
                      </MenuItem>
                      <MenuItem value="Mailed check">Mailed check</MenuItem>
                      <MenuItem value="Bank transfer (automatic)">
                        Bank transfer (automatic)
                      </MenuItem>
                      <MenuItem value="Credit card (automatic)">
                        Credit card (automatic)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <FormControl required error={!!errors.TechSupport}>
                  <FormLabel id="TechSupport">Tech Support</FormLabel>
                  <RadioGroup
                    row
                    name="TechSupport"
                    value={features.TechSupport}
                    onChange={(e) => handleRadioChange(e, 'TechSupport')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col>
                <FormControl required error={!!errors.PaperlessBilling}>
                  <FormLabel id="PaperlessBilling">Paperless Billing</FormLabel>
                  <RadioGroup
                    row
                    name="PaperlessBilling"
                    value={features.PaperlessBilling}
                    onChange={(e) => handleRadioChange(e, 'PaperlessBilling')}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <TextField
                  label="Tenure"
                  type="number"
                  name="tenure"
                  value={features.tenure}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  required
                  error={!!errors.tenure}
                  helperText={errors.tenure}
                />
              </Col>
              <Col>
                <TextField
                  label="Monthly Charges"
                  type="number"
                  name="MonthlyCharges"
                  value={features.MonthlyCharges}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  required
                  error={!!errors.MonthlyCharges}
                  helperText={errors.MonthlyCharges}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <TextField
                  label="Total Charges"
                  type="number"
                  name="TotalCharges"
                  value={features.TotalCharges}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  required
                  error={!!errors.TotalCharges}
                  helperText={errors.TotalCharges}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePredict}
                >
                  Predict
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          {prediction == 1 && (
            <>
              <Row>
                <Col>
                  <img
                    src="/churn_customer.png"
                    width={400}
                    style={{ animation: 'slideIn 0.6s ease-out forwards' }}
                  />
                </Col>
                <Col>
                  <p style={{ marginTop: '100%', fontSize: 'x-large', fontWeight: 'bold', textAlign: 'center' }}>Oh no! The customer might leave us soon!</p>
                </Col>
              </Row>

            </>
          )}
          {prediction == 0 && (
            <>
              <Row>
                <Col>
                  <img
                    src="/happy_customer.png"
                    width={400}
                    style={{ animation: 'slideIn 0.6s ease-out forwards' }}
                  />
                </Col>
                <Col>
                  <p style={{ marginTop: '100%', fontSize: 'x-large', fontWeight: 'bold', textAlign: 'center' }}>Hooray! The customer is sticking with us!</p>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default form;
