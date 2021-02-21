import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyWork from "../views/MyWork.vue";
import Resume from "../views/Resume.vue";
import Contact from "../views/Contact.vue";
import Airbean from "../views/Airbean.vue";
import EWallet from "../views/EWallet.vue";
import Webshop from "../views/Webshop.vue";
import MeetUp from "../views/MeetUp.vue";
import Intelium from "../views/Intelium.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/mywork",
        name: "MyWork",
        component: MyWork
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/airbean",
        name: "Airbean",
        component: Airbean
    },
    {
        path: "/ewallet",
        name: "E-Wallet",
        component: EWallet
    },
    {
        path: "/webshop",
        name: "Webshop",
        component: Webshop
    },
    {
        path: "/meetup",
        name: "meetup",
        component: MeetUp
    },
    {
        path: "/intelium",
        name: "intelium",
        component: Intelium
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;