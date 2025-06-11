import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ProductComparison.module.css';
var ProductComparison = function () {
    var products = [
        {
            id: 1,
            name: "Portal TV",
            price: "$149",
            image: "src/assets/images/img__partall__tv__prise.jpg",
            description: "Умные видеовызовы на вашем телевизоре"
        },
        {
            id: 2,
            name: "Portal",
            price: "$179",
            image: "src/assets/images/img__partall__prise.jpg",
            description: "Умные видеовызовы на 10-дюймовом HD-дисплее"
        },
        {
            id: 3,
            name: "Portal+",
            price: "$279",
            image: "src/assets/images/img__partall__plus.jpg",
            description: "Умные видеовызовы на 15-дюймовом HD-дисплее"
        },
        {
            id: 4,
            name: "Portal Mini",
            price: "$129",
            image: "src/assets/images/img__partall__prise.jpg",
            description: "Умные видеовызовы на 8-дюймовом HD-дисплее"
        }
    ];
    return (_jsx("section", { className: styles.comparison, children: _jsxs("div", { className: styles.container, children: [_jsx("h2", { className: styles.title, children: "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u043E\u0440\u0442\u0430\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u0430\u043C" }), _jsx("div", { className: styles.productsGrid, children: products.map(function (product) { return (_jsxs("div", { className: styles.productCard, children: [_jsxs("div", { className: styles.productHeader, children: [_jsx("h3", { children: product.name }), _jsx("p", { className: styles.price, children: product.price })] }), _jsx("img", { src: product.image, alt: product.name, className: styles.productImage }), _jsx("p", { className: styles.description, children: product.description }), _jsxs("div", { className: styles.buttons, children: [_jsx("button", { className: styles.buyButton, children: "\u041A\u0443\u043F\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441" }), _jsx("a", { href: "#learn-more", className: styles.learnMore, children: "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" })] })] }, product.id)); }) }), _jsx("button", { className: styles.compareButton, children: "\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B" })] }) }));
};
export default ProductComparison;
