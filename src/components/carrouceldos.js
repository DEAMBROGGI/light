import React from 'react'
import Carousel from 'react-grid-carousel'

 const Gallery = () => {


  return (
      <div className='gallery'>
    <Carousel cols={3} rows={2} gap={10} loop
    responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 3,
          
        },
        {
          breakpoint: 900,
          cols: 2,
        },
        {
            breakpoint: 620,
            cols: 1,
            rows:2
          }
      ]}
      mobileBreakpoint={320}
      >
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
        <h1 style={{position:"absolute", bottom:1}}>Nombre de foto</h1>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Gallery;