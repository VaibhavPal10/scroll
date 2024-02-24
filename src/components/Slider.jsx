import * as React from 'react';
import { Box, Button, Slide } from '@mui/material';
import fitMan from '../assets/nasa-fitness-tracking-mobile-app.png';
import mobileApp from '../assets/measure-total-body-weight-through-fitness-app.png'


const images = [
  fitMan,
  mobileApp,
  'https://example.com/image3.jpg',
];

const MUIButtonCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box className='displayBox' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box >
        <Slide direction="left" in={currentIndex === 0}>
            <Box className='imageBox' sx={{ display: 'flex', justifyContent: 'spaceBetween' }}>
                <div className="images" style={{display: 'flex'}}>
                    <div className="image first">
                    <img src={images[0]} alt="Image 1" height={300} />
                    </div>
                    <div className="image second">
                    <img src={images[1]} alt="Image 2" height={300}  />
                    </div>
                </div>
            
          </Box>
        </Slide>
        <Slide direction="right" in={currentIndex === 1}>
          <img src={images[2]} alt="Image 2" />
        </Slide>
        <Slide direction="left" in={currentIndex === 2}>
          <img src={images[2]} alt="Image 3" />
        </Slide>
      </Box>
      <Button onClick={handlePrev}>Prev</Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};

export default MUIButtonCarousel;
