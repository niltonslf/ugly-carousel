import {Carousel, CarouselItem} from './components/carousel';

function App() {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <img
            style={{objectFit: 'cover', width: '100%', height: '400px'}}
            src='https://i.imgur.com/5yeBVeM.jpeg'
            alt='image'
          />
        </CarouselItem>

        <CarouselItem>
          <img
            style={{objectFit: 'cover', width: '100%', height: '400px'}}
            src='https://i.imgur.com/5yeBVeM.jpeg'
            alt='image'
          />
        </CarouselItem>

        <CarouselItem>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              background: '#f9f53b',
              margin: 0,
            }}>
            3
          </h1>
        </CarouselItem>
      </Carousel>

      <h1>New section</h1>
    </>
  );
}

export default App;
