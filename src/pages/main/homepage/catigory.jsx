import React from 'react';
import "./category.scss"

const CategoriesSection = () => {
  return (
    <section className="categories">
      <h1 className="categories-title">Browse Categories</h1>
      <div className="categories-cards">
      \
        <div className="categories-cards-card">
          <div className="ccc-imgs">
            <img src="./IMG/cate-img1.svg" className="cards-card-img" alt="Art" />
            <img src="./IMG/icon1.svg" className="cards-card-icon" alt="Art Icon" />
          </div>
          <div className="cards-card-text">
            <p className="card-text-title">Art</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
