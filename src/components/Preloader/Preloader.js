import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
var Preloader = function () {
    var _a = useState(0), progress = _a[0], setProgress = _a[1];
    useEffect(function () {
        var interval = setInterval(function () {
            setProgress(function (prev) { return (prev >= 100 ? 100 : prev + 10); });
        }, 100);
        return function () { return clearInterval(interval); };
    }, []);
    return (_jsx("div", { className: "".concat(styles.preloader, " ").concat(progress >= 100 ? styles.hidden : ''), children: _jsxs("div", { className: styles.loader, children: [_jsx("div", { className: styles.spinner }), _jsxs("span", { className: styles.progress, children: [progress, "%"] })] }) }));
};
export default Preloader;
