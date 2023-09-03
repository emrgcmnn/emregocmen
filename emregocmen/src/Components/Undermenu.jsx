import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../index.css';

import img1 from '../img/egps.jpg'
import img2 from '../img/egproject.jpg'
import img3 from '../img/egcontact.jpg'

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: img1 ,
      desc: "Hello I'm Emre Gocmen. You can click on the link to learn more about me and access the courses I've completed and certificates. ",
      name: "ABOUT ME",
    },
    {
      id: 2,
      imgUrl:img2,
      desc: "You can check and examine my projects in more detail from the link below.",
      name: "PROJECTS",
    },
    {
      id: 3,
      imgUrl:img3,
      desc: "You can click on the link below to send a message or reach my social media accounts.",
      name: "CONTACT",
    },
    
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>DAHA FAZLA</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
