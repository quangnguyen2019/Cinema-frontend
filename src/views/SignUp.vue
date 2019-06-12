<template>
    <SignUpAuth v-bind="CheckSession()" />
</template>

<script>
import SignUpAuth from '../components/SignUp.component'

export default {
    name: "SignUp",
    components: {
        SignUpAuth
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
