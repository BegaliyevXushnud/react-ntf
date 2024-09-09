import React, { useEffect, useState } from 'react';
import "./magic.scss";
import Img from "../../../assets/work.png";
import Img2 from "../../../assets/magic2.png";

const MagicMashrooms = () => {
  const [currentTime, setCurrentTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0'),
      });
    };

    const timerInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  const workItems = [
    {
      id: 1,
      imgSrc: Img,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    },
    {
      id: 2,
      imgSrc: Img,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    },
    {
      id: 3,
      imgSrc: Img,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
    },
  ];

  return (
    <>
      <section className="magic">
        <div className="magic-text">
          <img src={Img2} className="magic-text-img" alt="Magic Mashrooms" />
          <h1 className="magic-text-title">Magic Mashrooms</h1>
          <button className="magic-text-button">
            <i className="fa-regular fa-eye"></i> See All
          </button>
        </div>
        <div className="strength">
          <p className="strength-s">Current Time:</p>
          <p className="strength-p">
            <span id="hrs">{currentTime.hours}</span><span> : </span>
            <span id="minut">{currentTime.minutes}</span><span> : </span>
            <span id="second">{currentTime.seconds}</span>
          </p>
        </div>
      </section>

     
    </>
  );
};

export default MagicMashrooms;
