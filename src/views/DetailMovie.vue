<template>
    <div class="container mt-5">
        <h2>Nội Dung Phim</h2>
        <hr>
        <div class="row">
            <div class="col-3">
                <img :src="movie.poster_image" width="220px">
            </div>
            <div class="col-9">
                <h4> {{ movie.name }} </h4>
                <br>
                <h6> Khởi Chiếu: {{ movie.publish_date }}</h6>
                <h6> Thời Lượng: {{ movie.duration }} phút </h6>
            </div>
        </div>
    </div>
</template>

<script>
import { BASE_DOMAIN } from '../../services/urls'
import MovieService from '../../services/movie.service'

export default {
    name: "MovieDetail",
    data() {
        return {
            movie: {}
        }
    },
    created() {
        MovieService
            .getMovie(this.$route.params.id)
            .then(response => {
                this.movie = response.data;
                this.movie.poster_image = BASE_DOMAIN + '/image/poster/' + this.movie.poster_image;
                console.log(this.movie.poster_image);
            });
        console.log('Hello created');
    }
}
</script>

<style>
    h4, h6 {
        font-weight: 600;
    }
</style>