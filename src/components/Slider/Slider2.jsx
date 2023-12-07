import React, { useState, useEffect } from 'react';
import img1 from './../../assets/images/Accessories-Fiesta-2.avif';
import img2 from './../../assets/images/Apple-Watch-Series-9-Banner.avif';
import img3 from './../../assets/images/Mobile-Days-Carousel-Banner-3.avif';
import img4 from './../../assets/images/Tecno-Pop-D1.avif';
import img5 from './../../assets/images/World-Cup-Carousel-Banner.avif';

const Slider2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide(prev => (prev ===4 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? 4 : prev - 1));
  };

  useEffect(() => {
    const slideChangeInterval = setInterval(() => {
      setActiveSlide(prev => (prev === 4 ? 0 : prev + 1));
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={activeSlide === 2 ? 'active' : ''}
          aria-current={activeSlide === 2 ? 'true' : 'false'}
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeSlide === 3 ? 'active' : ''}
          aria-current={activeSlide ===  3? 'true' : 'false'}
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={activeSlide === 4? 'active' : ''}
          aria-current={activeSlide === 4? 'true' : 'false'}
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
          <img src={img1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
          <img src={img2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
          <img src={img3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className={`carousel-item ${activeSlide ===3 ? 'active' : ''}`}>
          <img src={img4} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={`carousel-item ${activeSlide === 4 ? 'active' : ''}`}>
          <img src={img5} className="d-block w-100" alt="Slide 3" />
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

export default Slider2;
