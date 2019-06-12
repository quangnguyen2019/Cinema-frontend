<template>
    <SignInAuth v-bind="CheckSession()"/>
</template>

<script>
import SignInAuth from '../components/SignIn.component'

export default {
    name: "SignIn",
    components: {
        SignInAuth
    },
    methods: {
        CheckSession() {
            if (this.$session.exists()) {
                this.$router.push('/');
            }
        }
    }
}
</script>