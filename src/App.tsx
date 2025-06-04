import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import HomePage from './components/home/home';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="preloader">Загрузка...</div>
      ) : (
        <>
          <Header />
          <main>
            <HomePage />
          </main>
        </>
      )}
    </div>
  );
};

export default App;