import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Document from "./views/Document.vue";

const history = createWebHashHistory();
const router = createRouter({
	history: history,
	routes: [
		{ path: "/", component: Home },
		{ path: "/document", component: Document },
	],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
