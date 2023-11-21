import {Children, ReactNode, useCallback, useEffect, useState} from 'react';
import './carousel.css';

type CarouselProps = {
  children: ReactNode;
};

export const Carousel = ({children}: CarouselProps) => {
  const [active, setActive] = useState(0);
  const [focus, setFocus] = useState(false);
  const totalItems = Children.count(children);

  const handlePrevItem = useCallback(() => {
    if (active > 0) {
      setActive(prev => prev - 1);
    } else {
      setActive(totalItems - 1);
    }
  }, [active, totalItems]);

  const handleNextItem = useCallback(() => {
    if (active < totalItems - 1) {
      setActive(prev => prev + 1);
    } else {
      setActive(0);
    }
  }, [active, totalItems]);

  const onKeyPress = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight'].includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }

      switch (event.code) {
        case 'ArrowLeft':
          handlePrevItem();
          break;
        case 'ArrowRight':
          handleNextItem();
          break;
      }
    },
    [handleNextItem, handlePrevItem],
  );

  useEffect(() => {
    if (focus) document.addEventListener('keydown', onKeyPress);

    return () => document.removeEventListener('keydown', onKeyPress);
  }, [onKeyPress, focus]);

  const displayItems = Children.map(children, (child, index) => {
    return (
      <div
        key={`carousel-item-${index}`}
        className='carousel-item-container'
        style={{transform: `translateX(${100 * (index - active)}%)`}}>
        {child}
      </div>
    );
  });

  return (
    <div
      className='carousel-wrapper'
      tabIndex={0}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}>
      <div className='carousel-items'>{displayItems}</div>

      <div className='carousel-navigation'>
        <div className='carousel-navigation-item' onClick={handlePrevItem}>
          {'<'}
        </div>
        <div className='carousel-navigation-item' onClick={handleNextItem}>
          {'>'}
        </div>
      </div>
    </div>
  );
};
