<template>
    <button class="naver-login-btn" @click="naverLoginClick"></button>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const naverLoginClick = async () => {
            await store.dispatch("naverAuthenticationModule/requestNaverOauthRedirectionToDjango")
        }
        return {
            naverLoginClick,
        }
    }
}
</script>

<style scoped>
.naver-login-btn {
    margin: 10px 0;
    background-image: url("@/assets/images/fixed/login/naverLogin.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    width: 200px;
}
</style>