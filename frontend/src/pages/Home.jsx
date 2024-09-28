import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

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
      <div style={{ position: 'absolute', width:'100%', color: 'white', margin: '4% 5%' }}>
        <h1>Welcome</h1>
        <p style={{ color: 'white' }}>Check your customer will churn?</p>
        <Link to={"/form"}>
          <Button variant="outlined" size='large' style={{borderColor:'white', color:'white', marginTop:'2%'}}>Check</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
