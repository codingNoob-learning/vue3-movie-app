<template>
    <RouterLink
        :to="`/movie/${movie.imdbID}`"
        :style="{ backgroundImage: `url(${movie.Poster})` }"
        class="movie">
        <Loader 
            v-if="imageLoading"
            :size="1.5"
            absolute />
        <div class="info">
            <div class="year">
                {{ movie.Year }}
            </div>
            <div class="title">
                {{ movie.Title }}
            </div>
        </div>
    </RouterLink>
</template>

<script>
import Loader from "~/components/Loader"

export default {
    components: {
        Loader
    },
    props: {
        movie: {
            type: Object,
            // default: function() { return {}}
            default: () => ({})
        }
    },
    data() {
        return {
            imageLoading: true
        }
    },

    mounted() {
        // html 요소를 다룰 때는 mounted()로
        this.init()
    },

    methods: {
        async init() {
            const poster = this.movie.Poster
            if (!poster || poster === 'N/A') {
                this.imageLoading = false
            } else {
                await this.$loadImage(poster)
                this.imageLoading = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .movie {
        $width: 200px;
        width: $width;
        height: calc($width * 3 / 2);
        margin: 10px;
        border-radius: 4px;
        background-color: $gray-400;
        background-size: cover;
        overflow: hidden;
        position: relative;

        &:hover::after {
            content: "";
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            border: 6px solid $primary;
        }

        .info {
            background-color: rgba($black, .3);
            width: 100%;
            padding: 14px;
            font-size: 14px;
            text-align: center;
            position: absolute;
            left: 0px;
            bottom: 0px;
            backdrop-filter: blur(10px);
            
            .year {
                color: $primary;
            }

            .title {
                color: $white;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>