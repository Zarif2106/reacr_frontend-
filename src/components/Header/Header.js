import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
var Header = function (_a) {
    var onLoginClick = _a.onLoginClick;
    var _b = useState(false), mobileMenuOpen = _b[0], setMobileMenuOpen = _b[1];
    return (_jsx("header", { className: styles.header, children: _jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.logo, children: _jsx("img", { src: "src/assets/images/logo__abz.svg", alt: "Portal Logo" }) }), _jsx("button", { className: styles.mobileMenuButton, onClick: function () { return setMobileMenuOpen(!mobileMenuOpen); }, children: "\u2630" }), _jsxs("nav", { className: "".concat(styles.nav, " ").concat(mobileMenuOpen ? styles.open : ''), children: [_jsx(Link, { to: "/products", className: styles.link, children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B" }), _jsx(Link, { to: "/features", className: styles.link, children: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438" }), _jsx(Link, { to: "/support", className: styles.link, children: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430" }), _jsx("button", { className: styles.loginButton, onClick: onLoginClick, children: "\u0412\u043E\u0439\u0442\u0438" })] })] }) }));
};
export default Header;
