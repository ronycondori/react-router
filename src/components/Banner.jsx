import React from 'react';

function Banner({ title }) {
  return (
    <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url("/assets/img/travel/bg_5.jpg")` }}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>{title}</li>
        </ol>
      </div>
    </div>
  );
}

export default Banner;
