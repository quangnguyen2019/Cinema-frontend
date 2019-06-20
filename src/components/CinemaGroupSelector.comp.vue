<template>
    <div class="selector-container">
        <div class="selector-title">CHỌN RẠP</div>
        <ul>
            <li v-for="cinemaGroup in cinemaGroupsData" :key="cinemaGroup.id" 
                :class="{ 'active': cinemaGroup.id === selectedId }"
                @click="handleClick(cinemaGroup.id)">
                {{ cinemaGroup.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CinemaGroupList',
    data() {
        return {
            selectedId: -1
        }
    },
    props: {
        cinemaGroupsData: Array
    },
    methods: {
        handleClick(id) {
            this.selectedId = id;
            this.$emit('onClickTheater', id);
        }
    }
}
</script>
