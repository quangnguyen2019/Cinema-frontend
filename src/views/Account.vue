<template>
    <div>
        <AccountComp v-bind="checkSession()" />
    </div>
</template>

<script>
import AccountComp from '@/components/Account.comp'

export default {
    name: 'Account',
    components: {
        AccountComp
    },
    methods: {
        checkSession() {
            if (!this.$session.exists()) {
                this.$router.push('/');
            }
        }
    }
}
</script>
