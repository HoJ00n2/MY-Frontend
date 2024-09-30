<template>
    <v-btn class="kakao-login-btn" @click="kakaoLoginClick"></v-btn>
</template>

<script>
const kakaoAuthenticationModule = 'kakaoAuthenticationModule'
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const kakaoLoginClick = async () => {
            console.log("kakaoLoginClick")
            await store.dispatch(
                "kakaoAuthenticationModule/requestKakaoOauthRedirectionToDjango"
            );

        };
        return {
            kakaoLoginClick,
        };
    },
}
</script>

<style scoped>
.kakao-login-btn {
    margin: 10px 0;
    background-image: url("@/assets/images/fixed/login/kakaoLogin.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    width: 200px;
}
</style>