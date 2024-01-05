import React from "react";
import { ImageCarouselStyles } from "./ImageCarouselStyles";
import { MdClose } from "react-icons/md";

const ImageCarousel = ({ showImages, setShowImages, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ImageCarouselStyles>
      <div className="closecarousel">
        <MdClose
          className="closecarouselicon"
          onClick={() => setShowImages(false)}
        />
      </div>

      {images &&
        images?.map((image, i) => (
          <div key={i} className="imgbox">
            <img className="img" src={image} />
          </div>
        ))}
    </ImageCarouselStyles>
  );
};

export default ImageCarousel;
