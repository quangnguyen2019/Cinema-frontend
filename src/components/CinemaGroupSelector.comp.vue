<template>
    <ul>
        <li v-for="cinemaGroup in cinemaGroupsData" :key="cinemaGroup.id" @click="handleClick">
            {{ cinemaGroup.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CinemaGroupList',
    props: {
        cinemaGroupsData: Array
    },
    methods: {
        handleClick() {
            this.$emit('clickedSomething');
            console.log('Hello2');
        }
    }
}
</script>
