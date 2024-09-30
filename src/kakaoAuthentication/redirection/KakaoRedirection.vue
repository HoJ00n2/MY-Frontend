<template>
    <div></div>
</template>
<script>
import { mapActions } from 'vuex'

const kakaoAuthenticationModule = 'kakaoAuthenticationModule'
export default {
    methods: {
        ...mapActions(kakaoAuthenticationModule,
            ['requestAccessTokenToDjangoRedirection', 'requestUserInfoToDjango']),
        async setRedirectData() {
            const code = this.$route.query.code
            console.log('code:', code)

            await this.requestAccessTokenToDjangoRedirection({ code })
            await this.requestUserInfoToDjango()
        }
    },
    async created() {
        await this.setRedirectData()
    }
}
</script>