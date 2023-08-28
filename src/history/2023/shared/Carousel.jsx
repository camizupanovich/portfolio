import React, { useState } from 'react';
import { Paper, Tabs, Tab, Box } from '@mui/material';

const ImageCarousel = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (event, step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Box position="relative" height={300}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              display: activeStep === index ? 'block' : 'none',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              transition: 'opacity 0.5s',
              opacity: activeStep === index ? 1 : 0,
            }}
          />
        ))}
      </Box>
      <Paper square elevation={0}>
        <Tabs
          value={activeStep}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleStepChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Image carousel tabs"
        >
          {images.map((_, index) => (
            <Tab key={index} value={index} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
};

export default ImageCarousel;
