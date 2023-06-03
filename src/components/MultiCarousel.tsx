'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1260 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1260, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

type Type = {
  children: React.ReactNode;
}

export default function MultiCarousel({children}: Type) {
  return (
    <Carousel itemClass="flex h-[22rem] justify-center item-center" infinite autoPlay responsive={responsive}>
      {children}
    </Carousel>
  )
}