import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Document from "./views/Document.vue";
import Switch from "./components/Switch.vue";
import Button from "./components/Button.vue";
import Dialog from "./components/Dialog.vue";
import Tabs from "./components/Tabs.vue";

const history = createWebHashHistory();
export const router = createRouter({
	history: history,
	routes: [
		{ path: "/", component: Home },
		{
			path: "/document",
			component: Document,
			children: [
				{ path: "switch", component: Switch },
				{ path: "button", component: Button },
				{ path: "dialog", component: Dialog },
				{ path: "tabs", component: Tabs },
			],
		},
	],
});
