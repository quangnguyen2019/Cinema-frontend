<template>
    <div class="selector-container">
        <div class="selector-title">CHỌN PHIM</div>
        <ul v-if="moviesData.length > 0">
            <li v-for="movie in moviesData" :key="movie.id" 
                :class="{ 'active': movie.id === selectedId }"
                @click="handleClick(movie.id)">

                <div class="row">
                    <div class="col-2">
                        <img :src="movie.poster_image"  width="38px">
                    </div>
                    <div class="col-10 movie-name">
                        <div>{{ movie.name }}</div>
                    </div>
                </div>

            </li>
        </ul>
        <div class="no-selector" v-else>Vui lòng chọn rạp</div>
    </div>
</template>

<script>
export default {
    name: 'MovieSelector',
    data() {
        return {
            selectedId: 0
        }
    },
    props: {
        moviesData: Array
    },
    watch: {
        moviesData() {
            this.selectedId = 0;
        }
    },
    methods: {
        handleClick(id) {
            this.selectedId = id;
            this.$emit('onClickMovie', id);
        }
    }
}
</script>

<style>
    .movie-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>
