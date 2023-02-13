import React from "react";
import Slider from "react-slick";
import '../dars 4/app.css'

export default function App(){

    const ok = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow:5,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 5,
        
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const ok2 = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow:3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(
        <>

      <h2 className="text-center"> Multiple items </h2>
        <Slider {...ok}>
          <div className="carusels bg-info">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-dark">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-danger">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-primary">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-info">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-dark">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-danger">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-primary">
             <h1>Hello wordl</h1>
          </div>
        </Slider>


        <br />

        <Slider {...ok2}>
          <div className="carusels bg-info">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-dark">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-danger">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-primary">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-info">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-dark">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-danger">
             <h1>Hello wordl</h1>
          </div>
          <div className="carusels bg-primary">
             <h1>Hello wordl</h1>
          </div>
        </Slider>
        



        </>
    )
}