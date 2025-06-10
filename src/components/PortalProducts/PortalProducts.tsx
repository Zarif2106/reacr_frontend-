import React from 'react';
import styles from './PortalProducts.module.css';

interface Product {
  id: number;
  name: string;
  description: string;
  imageClass: string;
}

const PortalProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Portal TV",
      description: "Умные видеозвонки на самом большом экране вашего дома",
      imageClass: styles.partall__Tv,
    },
    {
      id: 2,
      name: "Portal",
      description: "Умные видеовызовы на 10-дюймовом HD-дисплее",
      imageClass: styles.partall__default,
    },
    {
      id: 3,
      name: "Portal+",
      description: "Умные видеовызовы на HD-дисплее с диагональю 15,6 дюйма",
      imageClass: styles.partall__pllus,
    },
    {
      id: 4,
      name: "Portal Mini",
      description: "Умные видеовызовы на 8-дюймовом HD-дисплее",
      imageClass: styles.partall__mini,
    }
  ];

  return (
    <section className={styles.card__Partall}>
      {products.map(product => (
        <div key={product.id} className={`${styles.partall} ${product.imageClass}`}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>{product.name}</h3>
          </div>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.buttonBox}>
            <a href="#" className={styles.buttonLink}>Узнать больше</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PortalProducts;