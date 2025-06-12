import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/views/HomePage.vue"
import MenuPage from "@/views/MenuPage.vue"
import CartPage from "@/views/CartPage.vue"
import ContactsPage from "@/views/ContactsPage.vue"
import SuccessfulOrder from "@/views/SuccessfulOrder.vue"

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/menu",
        name: "Menu",
        component: MenuPage,
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartPage,
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: ContactsPage,
    },
    {
        path: "/successful-order",
        name: "Success",
        component: SuccessfulOrder,
    }
  ],
})