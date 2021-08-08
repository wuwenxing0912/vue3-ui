import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Document from "./views/Document.vue";
import SwitchDoc from "./components/switch/SwitchDoc.vue";
import ButtonDoc from "./components/button/ButtonDoc.vue";
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
				{ path: "switch", component: SwitchDoc },
				{ path: "button", component: ButtonDoc },
				{ path: "dialog", component: Dialog },
				{ path: "tabs", component: Tabs },
			],
		},
	],
});
