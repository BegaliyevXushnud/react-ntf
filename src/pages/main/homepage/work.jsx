import React from 'react';
import "./work.scss"
import WorkImg from '../../../assets/work.png';

const HowItWorks = () => {
  const workItems = [
    {
      id: 1,
      imgSrc: WorkImg,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
    },
    {
      id: 2,
      imgSrc: WorkImg,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
    },
    {
      id: 3,
      imgSrc: WorkImg,
      title: 'Setup Your wallet',
      desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'
    }
  ];

  return (
    <section className="work">
      <h2 className="work-title">How it works</h2>
      <h3 className="work-desc">Find out how to get started</h3>
      <div className="work-items">
        {workItems.map((item) => (
          <div className="work-items-item" key={item.id}>
            <img src={item.imgSrc} className="items-item-img" alt={item.title} />
            <div className="work-img">
              <h2 className="work-title">{item.title}</h2>
              <p className="work-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
