import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react'; // Добавлен импорт useState
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import AuthModal from '../AuthModal/AuthModal';
import styles from './Layout.module.css';
var Layout = function (_a) {
    var children = _a.children;
    var _b = useState(false), isAuthModalOpen = _b[0], setIsAuthModalOpen = _b[1];
    return (_jsxs("div", { className: styles.wrapper, children: [_jsx(Preloader, {}), _jsx(Header, { onLoginClick: function () { return setIsAuthModalOpen(true); } }), _jsx("main", { className: styles.main, children: children }), _jsx(Footer, { onSignUpClick: function () { return setIsAuthModalOpen(true); } }), _jsx(AuthModal, { isOpen: isAuthModalOpen, onClose: function () { return setIsAuthModalOpen(false); } })] }));
};
export default Layout;
