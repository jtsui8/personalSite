import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import Ribbon from './Ribbon.tsx';
import Header from './Header.tsx';
// import Nav from './Nav.tsx';
import App from './App.tsx';
import Footer from './Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Ribbon />
		<Header />
		{/* <Nav /> */}
		<App />
		<Footer />
	</React.StrictMode>
);
