import axiosInst from "@/utility/axiosInstance"
import { ActionContext } from "vuex"
import { AxiosResponse } from "axios"

export type googleAuthenticationActions = {
    requestGoogleOauthRedirectionToDjango(): Promise<void>
    requestAccessTokenToDjangoRedirection(context: ActionContext<any, any>, payload: { code: string }): Promise<void>
    requestUserInfoToDjango(context: ActionContext<any, any>): Promise<any>
}
const actions: googleAuthenticationActions = {
    async requestGoogleOauthRedirectionToDjango(): Promise<void> {
        return axiosInst.djangoAxiosInst.get('/google_oauth/google').then((res) => {
            window.location.href = res.data.url
        })
    },
    async requestAccessTokenToDjangoRedirection(
        context: ActionContext<any, any>,
        payload: { code: string }): Promise<void> {
        try {
            console.log('requestAccessTokenToDjangoRedirection()')
            const { code } = payload
            const response = await axiosInst.djangoAxiosInst.post(
                '/google_oauth/google/access-token', { code })
            console.log('accessToken:', response.data.accessToken.access_token)
            localStorage.setItem("accessToken", response.data.accessToken.access_token)
        } catch (error) {
            console.log('Access Token 요청 중 문제 발생:', error)
            throw error
        }
    },
    async requestUserInfoToDjango(
        context: ActionContext<any, any>): Promise<any> {
        try {
            const accessToken = localStorage.getItem("accessToken")
            const userInfoResponse: AxiosResponse<any> = 
                await axiosInst.djangoAxiosInst.post('/google_oauth/google/user-info', { access_token: accessToken })
            const userInfo = userInfoResponse.data.user_info
            
            return userInfo
        } catch (error) {
            alert('사용자 정보 가져오기 실패!')
            throw error
        }
    }
}
export default actions;