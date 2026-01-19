import ReactDOM from 'react-dom/client';

import { Logger } from '@sitecore-search/react';

import App from '@/App.jsx';

Logger.setLogLevel('debug');

import React, { useEffect } from 'react';

function AppWithLocaleSync() {
	const appRef = React.useRef();
    console.log('App initialized with locale sync.');
	useEffect(() => {
		function handleLocaleMessage(event) {
			if (event.data?.type === 'SET_LOCALE' && event.data.locale) {
				// Dispatch a custom event for the app to handle
				window.dispatchEvent(new CustomEvent('external-locale', { detail: event.data.locale }));
			}
		}
		window.addEventListener('message', handleLocaleMessage);
		return () => window.removeEventListener('message', handleLocaleMessage);
	}, []);
	return <App ref={appRef} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppWithLocaleSync />);