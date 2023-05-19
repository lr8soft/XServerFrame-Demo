import LoginComp from "@/components/LoginComp.vue";
import RegistComp from "@/components/RegistComp.vue";
import CommentsComp from "@/components/CommentsComp.vue";


const routes = [
    { path:'/', component: CommentsComp },
    { path:'/login', component: LoginComp },
    { path:'/regist', component: RegistComp }
]

export default routes