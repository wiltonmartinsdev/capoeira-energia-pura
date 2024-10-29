import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import i18n from "./i18n";
import { AppRoutes } from "./Routes";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const loadGoogleMapsApi = (apiKey: string) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
};

loadGoogleMapsApi(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ToastContainer position="top-center" />

		<BrowserRouter>
			<I18nextProvider i18n={i18n}>
				<AppRoutes />
			</I18nextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
