import { Button } from '@mui/material';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeScreenStyle from '../styles/HomeScreenStyle.module.css';

const Home = () => {


  return (
    <>
      <div style={{
        position: 'absolute',
        top: '68px',
        width: '100%',
        height: '500px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black for the background
      }}>
        <img
          src='/customer_wallpaper.png'
          width={'50%'}
          height='500px'
          style={{
            filter: 'brightness(50%)', // Darken the image using brightness
            float: 'right',             // Move the image to the right side
            marginRight: '20px'         // Add some spacing from the right edge
          }}
        />
      </div>
      <div style={{ position: 'absolute', width: '100%', color: 'white', margin: '8% 12%' }}>
        <h1 style={{fontSize:'xxx-large'}}>Welcome to Churn Predictor</h1>
        <p style={{ color: 'white' }}>Safeguard your business by predicting customer churn early.</p>
        <Link to={"/form"}>
          <Button variant="outlined" size='large' style={{ borderColor: 'white', color: 'white', marginTop: '2%' }}>Check</Button>
        </Link>
      </div>
      <Row className={HomeScreenStyle.servText}>
        <Col>
          <Row style={{}}>
            <p>Services</p>
            <h2>How It Works</h2>
          </Row>
          <Row style={{ margin: '0px 8%' }}>
            <Col className={HomeScreenStyle.sevicesDiv}>
              <div className={HomeScreenStyle.imgDiv}>
                <img src='https://thumbs.dreamstime.com/b/fill-form-line-icon-filled-outline-vector-sign-linear-colorful-pictogram-isolated-white-edit-symbol-logo-illustration-95331560.jpg' width={'60%'} height={'100%'} />
              </div>
              <h5><b>Fill the Form</b></h5>
            </Col >
            <Col className={HomeScreenStyle.sevicesDiv}>
              <div className={HomeScreenStyle.imgDiv}>
                <img src='https://thumbs.dreamstime.com/b/result-icon-simple-vector-illustration-result-icon-216587206.jpg' width={'60%'} height={'100%'} />
              </div>
              <h5><b>Start To Proceed</b></h5>
            </Col>
            <Col className={HomeScreenStyle.sevicesDiv}>
              <div className={HomeScreenStyle.imgDiv}>
                <img src='https://as2.ftcdn.net/v2/jpg/02/70/72/85/1000_F_270728579_zEOHBhTtgJDwuE18UPU8geSjU1lxGlE6.jpg' width={'60%'} height={'100%'} />
              </div>
              <h5><b>Save your customer</b></h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
