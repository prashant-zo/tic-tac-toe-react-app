import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Google Analytics Code
const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
(function (w, d, s, g, js, fjs) {
  g = w.gtag || function () {
    (g.q = g.q || []).push(arguments);
  };
  js = d.createElement(s);
  js.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;
  fjs = d.getElementsByTagName(s)[0];
  fjs.parentNode.insertBefore(js, fjs);
  g('js', new Date());
  g('config', gaMeasurementId);
})(window, document, 'script');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
