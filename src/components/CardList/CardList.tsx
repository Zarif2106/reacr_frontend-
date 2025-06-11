import React, { useState, useEffect } from 'react';
import Card from '../PortalProducts/PortalProducts'; 
import styles from './CardList.module.css';

interface Product {
  id: number;
  name: string;
  description: string;
  imageClass: string;
}

interface CardListProps {
  limit?: number; // теперь можно передавать лимит
}

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

const CardList: React.FC<CardListProps> = ({ limit = products.length }) => {
  const [cards, setCards] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCards = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setCards(products);
      } catch (err) {
        setError('Ошибка загрузки продуктов');
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={styles.card__Partall}>
      {cards.slice(0, limit).map((card) => (
        <Card
          key={card.id}
          name={card.name}
          description={card.description}
          imageClass={card.imageClass}
        />
      ))}
    </section>
  );
};

export default CardList;