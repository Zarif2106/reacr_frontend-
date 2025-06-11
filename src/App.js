import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './assets/styles/global.css';
var App = function () {
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(HomePage, {}) }) }) }));
};
export default App;
