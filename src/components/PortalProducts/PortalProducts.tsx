import React from 'react';
import styles from './PortalProducts.module.css';

interface CardProps {
  name: string;
  description: string;
  imageClass: string;
}

const Card: React.FC<CardProps> = ({ name, description, imageClass }) => {
  return (
    <div className={`${styles.partall} ${imageClass}`}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>{name}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonBox}>
        <a href="#" className={styles.buttonLink}>Узнать больше</a>
      </div>
    </div>
  );
};

export default Card;