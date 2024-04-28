import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

import card1 from './img/card_1.jpg';
import card2 from './img/card_2.jpg';
import card3 from './img/card_3.jpg';
import card4 from './img/card_4.jpg';

const images = [card1, card2, card3, card4];

const fadeInAnimate = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1, // Initial delay for the entire animation
      staggerChildren: 0.5 // Stagger between each item
    }
  }
};

function Card({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length));
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  };

  useEffect(() => {
    changeImage();
  }, []);

  return (
    <a href={data.url}>
      <motion.li
        key={data}
        variants={fadeInAnimate}
        initial="initial"
        animate={controls}
        style={{ listStyleType: "none" }}
      >
        <div className="bg-white shadow-md relative my-5  hover:-translate-y-3 transition-transform duration-300">
          <img src={images[currentImageIndex]} className="object-cover w-full" alt="" />
          <div className="infomation absolute  hidden lg:block lg:top-40 lg:mt-15">
            <div className="level flex">
              {data.levels.map((level, index) => (
                <div key={index} className=" bg-white p-1 mt-2 mx-1 text-sm">
                  {level}
                </div>
              ))}
            </div>
          </div>
          <div className="card-content p-5">
            <p className=" font-bold text-xl">{data.description}</p>
            <p className="my-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <hr className="my-5" />
            <div className="level  md:hidden flex">
              {data.levels.map((level2, index) => (
                <div key={index} className=" bg-white shadow-md p-1 me-2 mt-2 text-blue-700/70 text-sm">
                  {level2}
                </div>
              ))}
            </div>
            <div className=" mt-2">
              <div className="topic flex ">
                {data.topics.slice(0, 5).map((topic, index) => (
                  <div key={index} className="p-1 mt-2 border-solid me-2  border-2 border-sky-500 rounded-lg text-sky-500 text-sm">
                    {topic}
                  </div>
                ))}
              </div>
              <div className="type flex items-center">
                {data.types.slice(0, 5).map((type, index) => (
                  <div key={index} className="p-1 mt-2  bg-sky-500 rounded-lg text-white text-sm me-1">
                    {type}
                  </div>
                ))}
              </div>
              <p className="my-5 text-blue-600/50">View more {">>"} </p>
            </div>
          </div>
        </div>
      </motion.li>
    </a>
  );
}

export default Card;
