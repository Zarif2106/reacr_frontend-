import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // <-- оставлено
var Slider = function () {
    var _a = useState(0), currentSlide = _a[0], setCurrentSlide = _a[1];
    var slides = [
        {
            id: 1,
            title: "Если вы не можете быть там, почувствуйте себя там с Portal",
            subtitle: "Умные видеозвонки с помощью встроенной Alexa."
        },
        {
            id: 2,
            title: "Оставайтесь на связи, где бы вы ни были, с Portal",
            subtitle: "Видеозвонки с технологией Alexa."
        },
        {
            id: 3,
            title: "Если расстояние разделяет, Portal объединяет",
            subtitle: "Интеллектуальные видеозвонки со встроенной Alexa."
        }
    ];
    useEffect(function () {
        var interval = setInterval(function () {
            nextSlide();
        }, 5000);
        return function () { return clearInterval(interval); };
    }, [currentSlide]);
    var nextSlide = function () {
        setCurrentSlide(function (prev) { return (prev === slides.length - 1 ? 0 : prev + 1); });
    };
    var prevSlide = function () {
        setCurrentSlide(function (prev) { return (prev === 0 ? slides.length - 1 : prev - 1); });
    };
    return (_jsxs("div", { className: styles.slider, children: [_jsxs("div", { className: styles.cardHome, children: [_jsx("img", { src: "/src/assets/images/home__mini.jpg", alt: "Promo", className: styles.cardHomeDecaration }), _jsxs("div", { className: styles.promoContent, children: [_jsx("p", { className: styles.titleCardHome, children: "\u041A\u0443\u043F\u0438\u0442\u0435 \u043B\u044E\u0431\u044B\u0435 2 \u0437\u0430 50$" }), _jsx("p", { className: styles.cardHome1, children: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B." })] })] }), _jsxs("div", { className: styles.slide, children: [_jsx("h2", { className: styles.titleHomeDecaration, children: slides[currentSlide].title }), _jsx("p", { className: styles.titleHomeDecaration1, children: slides[currentSlide].subtitle }), _jsxs("div", { className: styles.buttons, children: [_jsx("button", { className: styles.buttonHomeDecaration, children: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u043C\u043E" }), _jsx("a", { href: "#compare", className: styles.buttonHomeDecaration1, children: "\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u043F\u043E\u0440\u0442\u0430\u043B\u044B" })] })] }), _jsx("button", { className: styles.prev, onClick: prevSlide, children: "\u276E" }), _jsx("button", { className: styles.next, onClick: nextSlide, children: "\u276F" })] }));
};
export default Slider;
