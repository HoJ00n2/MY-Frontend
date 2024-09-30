<template>
    <div>
        <v-dialog v-model="dialog" max-width="500px" transition="dialog-bottom-transition">
            <v-card class="login" color="#F6F1EB">
                <v-card-title class="headline text-center py-4 mt-10" style="color: #444444;">
                    로그인
                </v-card-title>
                <v-btn icon @click="closeDialog" class="close-btn" text>
                    <v-icon color="#444444">mdi-close</v-icon>
                </v-btn>
                <GoogleLogin/>
                <KakaoLogin/>
                <NaverLogin/>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import GoogleLogin from './ui/GoogleLogin.vue';
import KakaoLogin  from './ui/KakaoLogin.vue';
import NaverLogin  from './ui/NaverLogin.vue';

export default {
    name: 'LoginPopup',
    components: {
        GoogleLogin,
        KakaoLogin,
        NaverLogin,
    },
    data() {
        return {
            dialog: true,
        }
    },
    methods: {
        closeDialog() {
            this.dialog = false;
            this.$emit('close');
        },
    }
}
</script>

<style scoped>
.login {
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
}
</style>