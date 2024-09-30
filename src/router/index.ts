import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import DashBoardRoutes from '@/dashboard/router/DashBoardRoutes'
import KakaoAuthenticationRoutes from '@/kakaoAuthentication/router/KakaoAuthenticationRoutes'
import GoogleAuthenticationRoutes from '@/googleAuthentication/router/GoogleAuthenticationRoutes'
import SurveyRoutes from '@/survey/router/SurveyRoutes'
import HomeRoutes from '@/home/router/HomeRoutes'
import NaverAuthenticationRoutes from '@/naverAuthentication/router/NaverAuthenticationRoutes'
import LoginRoutes from '@/auth/login/router/LoginRoutes'



const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...KakaoAuthenticationRoutes,
  ...GoogleAuthenticationRoutes,
  ...NaverAuthenticationRoutes,
  // ...DashBoardRoutes,
  ...SurveyRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
