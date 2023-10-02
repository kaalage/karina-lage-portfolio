import React from "react";
import InnerImage1 from "../Assets/inner-image1.png";
import InnerImage2 from "../Assets/inner-image2.png";
import InnerImage3 from "../Assets/inner-image3.png";
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

function ImageSlider() {
  const [currentImage, setCurrentImage] = React.useState(0);

  const images = [
    {
      src: InnerImage1,
      link: '/karina-lage-portfolio/project1',
    },
    {
      src: InnerImage2,
      link: '/karina-lage-portfolio/project2',
    },
    {
      src: InnerImage3,
      link: '/karina-lage-portfolio/project3',
    },
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div className="image-slider">
      <Link to={images[currentImage].link}>
        <img src={images[currentImage].src} alt={`Image ${currentImage + 1}`} />
      </Link>
      <div className="btn">
        <button onClick={previousImage}><i className='bx bx-chevron-left'></i></button>
        <button onClick={nextImage}><i className='bx bx-chevron-right'></i></button>
      </div>
      <div className="learn-more-button">
        {images.map((image, index) => (
          <Link
            key={index}
            to={image.link}
            style={{ display: index === currentImage ? 'block' : 'none', ...linkStyle }}
          >
            Learn More
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;