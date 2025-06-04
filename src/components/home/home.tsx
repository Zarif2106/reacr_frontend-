import React, { useState } from 'react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loginFormVisible, setLoginFormVisible] = useState(false);

  const slides = [
    {
      title: "Если вы не можете быть там, почувствуйте себя там с Portal",
      subtitle: "Умные видеозвонки с помощью встроенной Alexa.",
    },
    {
      title: "Оставайтесь на связи, где бы вы ни были, с Portal.",
      subtitle: "Видеозвонки с технологией Alexa.",
    },
    {
      title: "Если расстояние разделяет, Portal объединяет.",
      subtitle: "Интеллектуальные видеозвонки со встроенной Alexa.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      {/* Header */}
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
          <button
            className="decaration__heder__button__1"
            onClick={() => setLoginFormVisible(true)}
          >
            Войти
          </button>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="slider">
        <div className="slides">
          <div className="slide">
            <div className="title__home">
              <div className="title__home__decaration">
                <p>{slides[currentSlide].title}</p>
                <p className="title__home__decaration__1">{slides[currentSlide].subtitle}</p>
                <div className="button__home">
                  <button className="button__home__decaration">Посмотреть демо</button>
                  <a className="button__home__decaration__1" href="#">
                    Сравнить порталы
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__home">
          <img className="card__home__decaration" src="styles/img/home__mini.jpg" alt="" />
          <div className="title__card__home">
            <p>Купите любые 2 за 50$</p>
          </div>
          <div className="card__home__1">
            <p>Доставка без дополнительной оплаты.</p>
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </section>

      {/* Camera Section */}
      <div className="page__cameres">
        <div className="title__page__cameres">
          <p className="title__page__cameres__decaration">
            Умная камера держит каждый <br />разговор в центре внимания
          </p>
        </div>
        <div className="img__page__cameres">
          <img src="styles/img/page__cameres.jpg" alt="" />
        </div>
        <div className="base__page__cameres">
          <div className="base__page__cameres__1">
            <p className="base__page__cameres__1__decaration">Идет в ногу с действием</p>
            <div className="base__page__cameres__1__decaration__1">
              Умная камера автоматически панорамирует и масштабирует изображение, чтобы не отставать от происходящего.
              Двигайтесь и разговаривайте свободно и всегда оставайтесь в кадре.
            </div>
            <div className="button__page__cameres">
              <a className="button__page__cameres__decaration" href="#">
                Узнать больше
              </a>
            </div>
          </div>
          <div className="base__page__cameres__2">
            <p className="base__page__cameres__2__decaration">Keeps everyone in view</p>
            <div className="base__page__cameres__1__decaration__1">
              Когда в комнату входит больше людей, интеллектуальная камера автоматически расширяется, чтобы держать всех
              в поле зрения, так что вы не упустите ни единого момента.
            </div>
            <div className="button__page__cameres">
              <a className="button__page__cameres__decaration" href="#">
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Messenger Section */}
      <div className="page__mesenger">
        <div className="img__masenger__and___icons">
          <div className="img__masenger">
            <img src="styles/img/masenger.jpg" alt="" />
          </div>
          <div className="icons__mesenger">
            <img src="styles/img/icons__masenger__1.svg" alt="" />
          </div>
          <div className="icons__mesenger__1">
            <img src="styles/img/icons__masenger__2.svg" alt="" />
          </div>
        </div>
        <div className="title__page__mesenger">
          <div className="title__page__mesenger__decaration">
            <p>Совершает видеозвонки с помощью Messenger и WhatsApp</p>
            <p className="title__page__mesenger__decaration__1">
              Легко звоните друзьям и родственникам по видеосвязи на их смартфонах и планшетах, даже если у них нет портала.
            </p>
            <p className="title__page__mesenger__decaration__2">
              Доступность голосовой команды «Эй, портал» варьируется. Узнать больше. Требуется учетная запись Messenger или
              WhatsApp. WhatsApp недоступен на планшетах.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="page__partal__cards__price__ob">
        <div className="title__page__partal__cards__price">
          <p>Найдите портал, который подходит именно вам</p>
        </div>
        <div className="patall__prise__ob">
          <ProductCard
            title="Portal TV"
            price="$149"
            imgSrc="styles/img/img__partall__tv__prise.jpg"
            description="Умные видеовызовы на вашем телевизоре"
          />
          <ProductCard
            title="Portal"
            price="$179"
            imgSrc="styles/img/img__partall__prise.jpg"
            description="Умные видеовызовы на 10-дюймовом HD-дисплее"
          />
          <ProductCard
            title="Portal+"
            price="$279"
            imgSrc="styles/img/img__partall__plus.jpg"
            description="Умные видеовызовы на 15-дюймовом HD-дисплее"
          />
          <ProductCard
            title="Portal Mini"
            price="$129"
            imgSrc="styles/img/img__partall__prise.jpg"
            description="Умные видеовызовы на 8-дюймовом HD-дисплее"
          />
        </div>
        <div className="button__partall__cards__prise__end">
          <button className="button__partall__cards__prise__end__decaration">Сравнить продукты</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__internal__ob">
          <div className="footer__logo">
            <img src="styles/img/logo__footer.svg" alt="" />
          </div>
          <nav className="button__and__title__text__footer">
            <div className="buttons__bloc__1">
              <a className="buttons__bloc__1__decaration" href="#">
                Главная
              </a>
              <a className="buttons__bloc__1__decaration" href="#">
                Продукты
              </a>
              <a className="buttons__bloc__1__decaration" href="#">
                Функции
              </a>
              <a className="buttons__bloc__1__decaration" href="#">
                Частный по дизайну
              </a>
              <a className="buttons__bloc__1__decaration" href="#">
                Поддерживать
              </a>
              <a className="buttons__bloc__1__decaration" href="#">
                Карта сайта
              </a>
            </div>
          </nav>
          <div className="buttons__bloc__2">
            <a className="buttons__bloc__2__decaration__2" href="#">
              Политика конфиденциальности
            </a>
            <a className="buttons__bloc__2__decaration__2" href="#">
              Файлы cookie
            </a>
            <a className="buttons__bloc__2__decaration__2" href="#">
              Условия эксплуатации
            </a>
            <a className="buttons__bloc__2__decaration__2" href="#">
              Юридический
            </a>
            <a className="buttons__bloc__2__decaration__2" href="#">
              Условия продажи
            </a>
            <a className="buttons__bloc__2__decaration__2" href="#">
              Выбор рекламы
            </a>
          </div>
          <div className="title__text__footer">
            <p>Получайте электронные письма от Facebook о портале и других аппаратных продуктах Facebook.</p>
            <div className="button__footer">
              <button
                className="button__footer__decaration"
                onClick={() => setLoginFormVisible(true)}
              >
                Зарегистрироваться
              </button>
            </div>
            <div className="button__footer__2">
              <button className="button__footer__2__decaration">США (Английский)</button>
            </div>
          </div>
        </div>
        <div className="footer__title__end">
          <div className="footer__title__end__1">
            <p>
              Доступность голосовой команды “Привет, портал” может варьироваться. Выучить больше. Имитация изображений
              на экране. Пользовательский опыт может отличаться. Требуется подключение к беспроводному Интернету и
              учетная запись Facebook или WhatsApp. WhatsApp недоступен на планшетах. Функции и наполнение различаются и
              могут быть доступны не во всех моделях портала, а также не во всех регионах и языках. Для некоторых
              функций может потребоваться наличие учетной записи Facebook и загрузка мобильного приложения Портала.
              Могут применяться дополнительные условия регистрации учетной записи и сборы.
            </p>
          </div>
          <div className="footer__title__end__2">
            <p>
              *Представляет собой экономию по сравнению с обычными, не акционными ценами. Оба продукта должны быть
              приобретены по одному и тому же чеку, чтобы соответствовать требованиям. Действительно для покупок,
              соответствующих требованиям, на сайте portal.facebook.com. Не распространяется на предыдущие покупки и не
              подлежит передаче другим лицам. Не распространяется на наличные или их эквивалент. Распространяется только
              на товары, имеющиеся в наличии. Предложение может быть отменено или изменено в любое время без
              предварительного уведомления. Недействительно, если это запрещено.
            </p>
          </div>
          <div className="footer__title__end__3">
            <p>
              ©2021 Facebook, Inc. или ее аффилированные лица. Все права защищены. Facebook, портал Facebook и логотип
              Facebook являются товарными знаками Facebook, Inc. Amazon, Alexa и все связанные с ними логотипы являются
              товарными знаками компании Amazon.com, Inc. или ее аффилированных лиц. Другие названия и бренды могут быть
              объявлены собственностью других лиц.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Form Modal */}
      {loginFormVisible && (
        <LoginForm onClose={() => setLoginFormVisible(false)} />
      )}
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{ title: string; price: string; description: string; imgSrc: string }> = ({
  title,
  price,
  description,
  imgSrc,
}) => {
  return (
    <div className="partall__tv__prise__ob">
      <div className="partall__tv__prise">
        <div className="partall__tv__prise__title__ob">
          <div className="partall__tv__prise__title">
            <p>{title}</p>
          </div>
          <div className="partall__tv__prise__title__149">
            <p>{price}</p>
          </div>
        </div>
        <div className="img__partall__tv__prise">
          <img src={imgSrc} alt="" />
        </div>
        <div className="title__partall__prise__decaration">
          <p>{description}</p>
        </div>
        <div className="button__partall__cards__prise">
          <button className="button__partall__cards__prise__decaration">Купить сейчас</button>
        </div>
        <div className="button__partall__cards__prise__2">
          <a className="button__partall__cards__prise__decaration__2" href="#">
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
};

// Login Form Modal Component
const LoginForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="forma" style={{ display: 'block' }}>
      <form action="#" className="forma__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="contener">
          <p className="title__form__txt">Зарегистрироваться</p>
          <p className="form__txt">Заполните форму</p>
          <hr />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="укажите email" required autoComplete="off" />
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" placeholder="создайте пароль" required />
          <label htmlFor="confirmPassword">Подтвердите пароль</label>
          <input type="password" id="confirmPassword" placeholder="подтвердите пароль" required />
          <label>
            <input type="checkbox" defaultChecked /> Запомнить меня
          </label>
          <p className="form__txt__2">
            Создав аккаунт вы соглашаетесь с нашими условиями{' '}
            <a href="#"></a>
          </p>
          <div className="butons__form">
            <button type="button" className="canselbtn" onClick={onClose}>
              Закрыть
            </button>
            <button type="submit" className="sign__up">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;