import React from "react";

function Home() {
  return (
    <>
      <div className="add-to-cart">
        <img
          src="https://static.thenounproject.com/png/47398-200.png"
          alt="AddToCart"
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/k2jbyq80pkrrdj/mobile-refurbished/c/u/e/iphone-11-pro-512-u-mwcd2hn-a-apple-0-original-imafkg2fhzhzzh5s.jpeg?q=20"
            alt=""
          />
        </div>
        <div className="img-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000</span>
        </div>
        <div className="img-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </>
  );
}
export default Home;
