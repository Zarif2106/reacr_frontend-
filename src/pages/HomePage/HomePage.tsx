import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Добро пожаловать!</h1>
      <h2>
        <Link to="/cards">Наши карточки</Link>
      </h2>
      <div className="featured-cards">
        <CardList limit={3} />
      </div>
    </div>
  );
};

export default HomePage;


