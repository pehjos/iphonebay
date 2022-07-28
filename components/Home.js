import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
function Homepage() {
    return (
        <div>
       <Carousel fade={true} controls={false}>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://bgr.com/wp-content/uploads/2021/07/apple-iphone-12-6.jpg?resize=1440,810"
      height={300}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <div className="image">
    <img
      className="d-block w-100"
      height={300}
      src="https://images.macrumors.com/t/62vjVRKy2CKVEE8l08AhzS04C3I=/800x0/smart/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg?lossy"
      alt="Second slide"
    />
    </div>
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height={300}
      src="https://zacknation.net/wp-content/uploads/2022/05/download5992.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Homepage