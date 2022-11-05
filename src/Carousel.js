import React, { useState } from "react";
import "./Carousel.css";
import intersect from "./image/Intersect.svg"
import Card from "./Card";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.png";
import img5 from "./image/img5.jpg";
import img6 from "./image/img6.jpg";

const Carousel = () => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(1);
  const [k, setk] = useState(2);
  const Slidedata = [
    { id:1,
      img: img1,
      name: "Home Made Pizza",
      price: "$19",
      rating: "4.7",
      time: "45-50 min"
    },
    { id:3,
      img: img2,
      name: "Delicious Pizza",
      price: "$19",
      rating: "4.7",
      time: "45-50 min"
    },
    { id:4,
      img: img5,
      name: "Tandoori Chicken",
      price: "$35",
      rating: "4.7",
      time: "45-50 min"
    },
    { id:5,
      img: img6,
      name: "Chilli Chicken",
      price: "$30",
      rating: "4.7",
      time: "45-50 min"
    },
    { id:6,
      img: img3,
      name: "Extra Cheese Pizza",
      price: "$20",
      rating: "4.7",
      time: "45-50 min"
    },
    { id:7,
      img: img4,
      name: "Home Cook Pizza",
      price: "$15",
      rating: "4.7",
      time: "45-50 min"
    },
  ]

  const prev = () => {
    if (i === 0)
      seti(Slidedata.length - 1);
    else
      seti(i - 1);

    if (j === 0)
      setj(Slidedata.length - 1);
    else
      setj(j - 1);

    if (k === 0)
      setk(Slidedata.length - 1);
    else
      setk(k - 1);
  };
  const next = () => {
    if (i === Slidedata.length - 1)
      seti(0);
    else
      seti(i + 1);

    if (j === Slidedata.length - 1)
      setj(0);
    else
      setj(j + 1);

    if (k === Slidedata.length - 1)
      setk(0);
    else
      setk(k + 1);
  }

  const [request, setrequest] = useState(false);
console.log("==0",request)
  return (
    <section className="carousel">

      <h3>Popular Items</h3>

      <div className="slider">
        <div className="btn1" onClick={prev}>
          <img src={intersect} alt="" />
        </div>

        <Card val={Slidedata[i]} />
        <Card val={Slidedata[j]} />
        <Card val={Slidedata[k]} />


        <div className="btn2" onClick={next}>
          <img src={intersect} alt="" />
        </div>
      </div>
      <a href="#LandingSection" >
      <button className="request-dish" onClick={() => { setrequest(true) }}>Request a Dish</button>
      </a>

      <div className={request ? "request-popup" : "close"}>
        <div className="dish-request-menu">
          <h2>Request a Dish</h2>
          <div className="input-field">
            <label>Name*</label>
            <input type="text" placeholder="   Enter name of the dish" />
          </div>
          <div className="input-field">
            <label htmlFor="">Upload an image</label>
            <input type="text" placeholder="   Paste a URL" />
          </div>
          <div className="request-controls">
            <button id="cancel" onClick={() => { setrequest(false) }}>Cancel</button>
            <button id="submit">Submit Request</button>

          </div>
        </div>
      </div>

    </section>


  )
}

export default Carousel;