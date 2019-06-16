<template>
    <div>   
        <h4 class="text-center mb-5">DANH SÁCH PHIM</h4>

        <div class="row">
            <div class="col-md-3 top-films" v-for="movie in moviesData" :key="movie.id">
                <router-link :to="'/movie/' + movie.id">
                    <img v-bind:src="movie.poster_image" class="card-img-top mb-3" height="86%"> 
                </router-link> 
                <router-view></router-view>

                <div class="top-films-title">
                    <router-link :to="'/movie/' + movie.id">
                        {{ movie.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoviesList',
    props: {
        moviesData: Array
        // default: [],
        // required: true
    }
}
</script>

<style scoped>
    .top-films {
        box-sizing: border-box;
        margin-bottom: 40px;
    }

    .top-films a {
        color: black;
        transition: all .5s;
    }

    .top-films-title {
        box-sizing: border-box;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .top-films-title a:hover {
        text-decoration: none;
    }

</style>


