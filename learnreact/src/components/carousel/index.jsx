import React from "react";
import "./index.css"
import slide1 from "../../images/1.jpg";
import slide2 from "../../images/2.jpg";
import slide3 from "../../images/3.jpg";

function Carousel() {
  return (
    <div className="w-100 h-100">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={slide1} style={{height: "200px", width: "400px"}} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide2} style={{height: "200px", width: "400px"}} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={slide3} style={{height: "200px", width: "400px"}} alt="Third slide" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
