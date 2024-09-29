import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import DashBoardRoutes from '@/dashboard/router/DashBoardRoutes'
import KakaoAuthenticationRoutes from '@/kakaoAuthentication/router/KakaoAuthenticationRoutes'
import GoogleAuthenticationRoutes from '@/googleAuthentication/router/GoogleAuthenticationRoutes'
import SurveyRoutes from '@/survey/router/SurveyRoutes'
import HomeRoutes from '@/home/router/HomeRoutes'


const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  // ...DashBoardRoutes,
  ...KakaoAuthenticationRoutes,
  ...GoogleAuthenticationRoutes,
  ...SurveyRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
