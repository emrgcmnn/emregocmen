import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

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
      imgUrl: "https://yunti.files.wordpress.com/2016/09/manzara_08_tam35-blogspot-com.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "YAŞA SEV",
    },
    {
      id: 2,
      imgUrl:
        "https://yunti.files.wordpress.com/2016/02/manzara_06_tam35-blogspot-com.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "KORU SEV",
    },
    {
      id: 3,
      imgUrl:
        "https://e0.pxfuel.com/wallpapers/940/790/desktop-wallpaper-high-quality-scenery-full-scenery-tree-scenery-beautiful-scenery-morning-scenery.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "DEVAM SEV",
    },
    {
      id: 5,
      imgUrl: "https://yunti.files.wordpress.com/2016/09/manzara_13_tam35-blogspot-com.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "SEVMEYİ SEV",
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
              <button>See more</button>
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
