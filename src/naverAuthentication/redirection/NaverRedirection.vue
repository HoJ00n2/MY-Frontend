<template>
    <div></div>    
</template>
<script>
import { mapActions } from 'vuex';
const authenticationModule = 'naverAuthenticationModule'
const accountModule = 'accountModule'
export default {
    methods: {
        ...mapActions(authenticationModule, [
            'requestAccessTokenTojangoRedirection',
        ]),
        async setRedirectData () {
            const code = this.$route.query.code
            await this.requestAccessTokenToDjangoRedirection({ code })
        },
        async created () {
            await this.setRedirectData()
        }
    }
}
</script>