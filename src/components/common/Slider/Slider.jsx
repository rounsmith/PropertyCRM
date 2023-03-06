import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const CustomSlider = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'custom-slick-list',
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
