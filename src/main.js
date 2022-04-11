if ("serviceWorker" in navigator && __production__) {
	self.addEventListener("load", async () => {
		const container = navigator.serviceWorker;
		if (container.controller === null) {
			await container.register("/sw.js")
		}
	});
}
// import {init,defaultOptions,supportedLangs} from "@libs/i18n.js"

// {
// 	let locale = (localStorage.hasOwnProperty('locale'))?localStorage.getItem("locale"):navigator.language
// 	if (!supportedLangs.includes(locale)) {
// 		locale = defaultOptions.initLocale
// 	}

// 	init(locale)
// }

import "./libs/bootstrap.js"

import App from './App.svelte';

const app = new App({
	target: document.body
});

export default app;