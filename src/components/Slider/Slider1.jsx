import React, { useState, useEffect } from 'react';
import img1 from './../../assets/images/Bank-Bonanza.avif';
import img2 from './../../assets/images/Weekday-Offer.avif';

const Slider1 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide(prev => (prev === 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? 1 : prev - 1));
  };

  useEffect(() => {
    const slideChangeInterval = setInterval(() => {
      setActiveSlide(prev => (prev === 1? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(slideChangeInterval);
    };
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={activeSlide === 0 ? 'active' : ''}
          aria-current={activeSlide === 0 ? 'true' : 'false'}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeSlide === 1 ? 'active' : ''}
          aria-current={activeSlide === 1 ? 'true' : 'false'}
          aria-label="Slide 2"
        ></button>

      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
          <img src={img1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
          <img src={img2} className="d-block w-100" alt="Slide 2" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider1;
