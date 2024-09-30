import axiosInst from "@/utility/axiosInstance"
export type AuthenticationActions = {
    requestNaverOauthRedirectionToDjango(): Promise<void>
}
const actions: AuthenticationActions = {
    async requestNaverOauthRedirectionToDjango(): Promise<void> {
        console.log('requestNaverOauthRedirectionToDjango()')
        return axiosInst.djangoAxiosInst.get('/naver_oauth/naver').then((res) => {
            console.log('url:', res.data.url)
            window.location.href = res.data.url
        })
    },
};
export default actions;