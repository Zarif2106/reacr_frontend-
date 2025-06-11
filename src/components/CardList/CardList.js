import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Card from '../PortalProducts/PortalProducts';
import styles from './CardList.module.css';
var products = [
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
var CardList = function () {
    var _a = useState([]), cards = _a[0], setCards = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    useEffect(function () {
        // Вместо fetch - просто загружаем статические данные
        try {
            // Можно добавить задержку для имитации загрузки, если нужно
            setTimeout(function () {
                setCards(products);
                setLoading(false);
            }, 500);
        }
        catch (err) {
            setError("Ошибка загрузки данных");
            setLoading(false);
        }
    }, []);
    if (loading)
        return _jsx("div", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    if (error)
        return _jsxs("div", { children: ["\u041E\u0448\u0438\u0431\u043A\u0430: ", error] });
    return (_jsx("section", { className: styles.card__Partall, children: cards.map(function (card) { return (_jsx(Card, { name: card.name, description: card.description, imageClass: card.imageClass }, card.id)); }) }));
};
export default CardList;
