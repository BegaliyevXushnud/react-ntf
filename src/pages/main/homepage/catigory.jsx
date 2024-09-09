import React from 'react';
import "./category.scss"
import Icon1 from "../../../assets/icon1.png"
import Icon2 from "../../../assets/icon2.png"
import Icon3 from "../../../assets/icon3.png"
import Icon4 from "../../../assets/icon4.png"
import Icon5 from "../../../assets/icon5.png"
import Icon6 from "../../../assets/icon6.png"
import Icon7 from "../../../assets/icon7.png"
import Icon8 from "../../../assets/icon8.png"
import CateImg1 from '../../../assets/cate1.png';
import CateImg2 from '../../../assets/cate2.png';
import CateImg3 from '../../../assets/cate3.png';
import CateImg4 from '../../../assets/cate4.png';
import CateImg5 from '../../../assets/cate5.png';
import CateImg6 from '../../../assets/cate6.png';
import CateImg7 from '../../../assets/cate7.png';
import CateImg8 from '../../../assets/cate8.png';
const Categories = () => {
  const categories = [
    { id: 1, title: 'Art', imgSrc: CateImg1, iconSrc: Icon1 },
    { id: 2, title: 'Collectibles', imgSrc: CateImg2, iconSrc: Icon2 },
    { id: 3, title: 'Music', imgSrc: CateImg3, iconSrc: Icon3 },
    { id: 4, title: 'Photography', imgSrc: CateImg4, iconSrc: Icon4 },
    { id: 5, title: 'Video', imgSrc: CateImg5, iconSrc: Icon5 },
    { id: 6, title: 'Utility', imgSrc: CateImg6, iconSrc: Icon6 },
    { id: 7, title: 'Sport', imgSrc: CateImg7, iconSrc: Icon7 },
    { id: 8, title: 'Virtual Worlds', imgSrc: CateImg8, iconSrc: Icon8 },
  ];

  return (
    <section className="categories">
      <h1 className="categories-title">Browse Categories</h1>
      <div className="categories-cards">
        {categories.map((category) => (
          <div className="categories-cards-card" key={category.id}>
            <div className="ccc-imgs">
              <img src={category.imgSrc} className="cards-card-img" alt={category.title} />
              <img src={category.iconSrc} className="cards-card-icon" alt={category.title + ' icon'} />
            </div>
            <div className="cards-card-text">
              <p className="card-text-title">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;