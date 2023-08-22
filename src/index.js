import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

//import ScrollToTop from './components/ScrollToTop';

//const WrappedApp = ScrollToTop(App);

const container = document.getElementById('root');
const root = createRoot(container); // createRot(container!) if you use TypeScript

root.render(<App />);
