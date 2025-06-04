import React, { useState } from 'react';
import './header.module.css';

const Header = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
  };

  return (
    <header className="heder">
      <div className="logo">
        <img src="styles/img/logo.heder.svg" alt="Логотип" />
      </div>

      <div className="button__heder">
        <a className="decaration__heder__button__0" href="#">
          Продукты
        </a>
        <a className="decaration__heder__button" href="#">
          Функции
        </a>
        <a className="decaration__heder__button" href="#">
          Поддерживать
        </a>
      </div>

      <div className="button__heder__1">
        <button className="decaration__heder__button__1" onClick={handleLoginClick}>
          Войти
        </button>
      </div>

      {/* Предположим, форма находится здесь или в другом компоненте */}
      {isLoginFormVisible && (
        <LoginForm onClose={() => setIsLoginFormVisible(false)} />
      )}
    </header>
  );
};

// Пример простого компонента формы
const LoginForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="login-form">
      <h2>Форма входа</h2>
      <form>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default Header;