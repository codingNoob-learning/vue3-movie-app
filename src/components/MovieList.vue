<template>
    <div class="container">
        <div class="inner">
            <MovieItem
                v-for="movie_rq in movies"
                :key="movie_rq.imdbID"
                :movie="movie_rq" />
        </div>
    </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
    components: {
        MovieItem
    },
    computed: {
        // v-for="movie in movies"의 movies
        movies() {
            return this.$store.state.movie.movies
        }
    }
}
</script>