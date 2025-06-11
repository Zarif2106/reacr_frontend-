import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div className="cards-page">
      <h1>Все карточки</h1>
      <div className="controls">
        <span>Показать: </span>
        <Link to="?limit=5">5</Link>
        <Link to="?limit=10">10</Link>
        <Link to="?limit=20">20</Link>
      </div>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;