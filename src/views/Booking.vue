<template>
    <BookingComp v-bind="CheckSession()"/>
</template>

<script>
import BookingComp from '@/components/Booking.comp'

export default {
    name: 'Booking',
    components: {
        BookingComp
    },
    methods: {
        CheckSession() {
            if (!this.$session.exists()) {
                alert("Bạn cần đăng nhập trước khi dùng tính năng này !!");
                this.$router.push('/');
            }
        }
    }
}
</script>
