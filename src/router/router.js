import AddStudent from "@/Pages/AddStudent.vue";
import EditStudent from "@/Pages/EditStudent.vue";
import Home from "@/Pages/Home.vue";
import ShowStudent from "@/Pages/ShowStudent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/add-student", component: AddStudent },
  { path: "/show-student/:id", component: ShowStudent },
  { path: "/edit-student/:id", component: EditStudent, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
