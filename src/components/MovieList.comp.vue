<template>
    <ul v-if="moviesData.length > 0">
        <li v-for="movie in moviesData" :key="movie.id">
            {{ movie.name }}
        </li>
    </ul>
    <p class="text-center" v-else>Please choose a theater.</p>
</template>

<script>
export default {
    name: 'MovieList',
    props: {
        moviesData: Array
    }
}
</script>
