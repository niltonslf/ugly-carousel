import {ReactNode} from 'react';

type CarouselItemProps = {
  children: ReactNode;
};

export const CarouselItem = ({children}: CarouselItemProps) => {
  return <div className='carousel-item'>{children}</div>;
};
