<template>
    <div class="container">
        <div
            :class="{ 'no-result': !movies.length }"
            class="inner">
            <Loader v-if="loading" />
            <div
                v-if="message"
                class="message">
                {{ message }}
            </div>
            <div 
                v-else
                class="movies">
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
import Loader from '~/components/Loader'

export default {
    components: {
        MovieItem, Loader
    },
    computed: {
        // 8번째줄의 v-for="movie in movies"의 movies
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        },
        loading() {
            return this.$store.state.movie.loading
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
    .container {
        margin-top: 30px;

        .inner {
            background-color: $gray-200;
            padding: 10px 0px;
            border-radius: 4px;
            text-align: center;

            &.no-result {
                padding: 70px 0px;
            }
        }

        .message {
            color: $gray-400;
            font-size: 20px;
        }

        .movies {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>