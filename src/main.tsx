import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoutes } from './routes';

import 'virtual:uno.css';

const root = document.getElementById('root') as HTMLElement;

const App = (
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);

createRoot(root).render(App);

const showErrorOverlay = (err: unknown) => {
	const elementName = 'vite-error-overlay';
	const ErrorOverlay = customElements.get(elementName);

	// prevent double overlay, it's just my preference
	const isAlreadyAppear = document.body.contains(document.querySelector(elementName));
	const isProduction = import.meta.env.PROD;

	if (!ErrorOverlay || isAlreadyAppear || isProduction) {
		return;
	}

	document.body.appendChild(new ErrorOverlay(err));
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) => showErrorOverlay(reason));
