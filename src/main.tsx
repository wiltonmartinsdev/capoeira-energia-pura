import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import i18n from "./i18n";
import { AppRoutes } from "./Routes";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

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
