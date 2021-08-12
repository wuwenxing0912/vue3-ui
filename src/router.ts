import { createWebHashHistory, createRouter } from "vue-router";
// import Home from "./views/Home.vue";
import Document from "./views/Document.vue";
import SwitchDoc from "./components/switch/example/SwitchDoc.vue";
import ButtonDoc from "./components/button/ButtonDoc.vue";
import ModalDoc from "./components/modal/ModalDoc.vue";
import TabsDoc from "./components/tabs/example/TabsDoc.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    // { path: "/", component: Home },
    { path: "/", component: Document, redirect: "/components/button" },
    {
      path: "/components",
      component: Document,
      children: [
        { path: "button", component: ButtonDoc },
        { path: "modal", component: ModalDoc },
        { path: "tabs", component: TabsDoc },
        { path: "switch", component: SwitchDoc },
      ],
    },
  ],
});
