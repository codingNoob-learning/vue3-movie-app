<template>
    <div
        :style="{ backgroundImage: `url(${movie.Poster})` }"
        class="movie">
        <div class="info">
            <div class="year">
                {{ movie.Year }}
            </div>
            <div class="title">
                {{ movie.Title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            // default: function() { return {}}
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
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