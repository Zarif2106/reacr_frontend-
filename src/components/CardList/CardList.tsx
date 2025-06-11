import React, { useState, useEffect } from 'react';
import Card from '../PortalProducts/PortalProducts';
import styles from './CardList.module.css';



interface Product {
  id: number;
  name: string;
  description: string;
  imageClass: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then((response) => {
        if (!response.ok) throw new Error('Ошибка сети');
        return response.json();
      })
      .then((data) => {
        // Пример маппинга данных под вашу структуру
        const mappedCards = data.map((item: any) => ({
          id: item.id,
          name: `Product #${item.id}`, 
          description: item.body,
          imageClass: styles.partall__default, // можно динамически выбирать класс
        }));
        setCards(mappedCards);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={styles.card__Partall}>
      {cards.map((card) => (
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