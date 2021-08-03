import { createApp } from "vue";
import App from "./App.vue";
import Example1 from "../src/components/example1.vue";
import Example2 from "../src/components/example2.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
	history: history,
	routes: [
		{ path: "/", component: Example1 },
		{ path: "/qqq", component: Example2 },
	],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
