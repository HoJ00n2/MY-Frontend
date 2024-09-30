<template>
  <div></div>
</template>
<script>
import { mapActions } from 'vuex'
const googleAuthenticationModule = 'googleAuthenticationModule'
export default {
  methods: {
    ...mapActions(googleAuthenticationModule, [
      'requestAccessTokenToDjangoRedirection',
      'requestUserInfoToDjango',
    ]),
    async setRedirectData() {
      const code = this.$route.query.code
      console.log('code:', code)

      await this.requestAccessTokenToDjangoRedirection({ code })

      const userInfo = await this.requestUserInfoToDjango()
        console.log('userInfo:', userInfo)
        console.log('email:', userInfo.email)
        console.log('profile:', userInfo.profile)
    }
  },
  async created() {
    await this.setRedirectData()
  }
}
</script>