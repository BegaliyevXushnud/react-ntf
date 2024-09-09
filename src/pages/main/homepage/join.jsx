import React from 'react';
import "./join.scss"
import KosmonaftImg from '../../../assets/kosmonaft.png'; 

const JoinSection = () => {
  return (
    <section className="join">
      <img src={KosmonaftImg} className="join_img" alt="Kosmonaft" />
      <div className="join-text">
        <h2>Join our weekly digest</h2>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
      </div>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="join_input"
      />
      <button className="join-button">
        <i className="fa-regular fa-comment"></i>
        <span>Subscribe</span>
      </button>
    </section>
  );
};

export default JoinSection;
