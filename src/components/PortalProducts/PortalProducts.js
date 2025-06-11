import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './PortalProducts.module.css';
var Card = function (_a) {
    var name = _a.name, description = _a.description, imageClass = _a.imageClass;
    return (_jsxs("div", { className: "".concat(styles.partall, " ").concat(imageClass), children: [_jsx("div", { className: styles.titleBox, children: _jsx("h3", { className: styles.title, children: name }) }), _jsx("p", { className: styles.description, children: description }), _jsx("div", { className: styles.buttonBox, children: _jsx("a", { href: "#", className: styles.buttonLink, children: "\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435" }) })] }));
};
export default Card;
