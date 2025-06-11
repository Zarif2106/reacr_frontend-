import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* Встраиваем CardList внутрь HomePage как вложенный маршрут или напрямую */}
          {/* Если хочешь показывать карточки сразу на главной странице — можно так: */}
         
        </Route>
        {/* Добавляй другие маршруты сюда по мере необходимости */}
      </Routes>
    </Router>
  );
};

export default App;