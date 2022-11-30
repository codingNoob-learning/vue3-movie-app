<template>
    <div class="container">
        <div class="inner">
            <div class="message">
                {{ message }}
            </div>
            <div class="movies">
                <MovieItem
                    v-for="movie_rq in movies"
                    :key="movie_rq.imdbID"
                    :movie="movie_rq" />
            </div>
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
        // 8번째줄의 v-for="movie in movies"의 movies
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        .movies {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>