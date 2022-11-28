<template>
    <Header1 />
    <RouterView />
</template>

<script>
import Header1 from '~/components/Header1'

export default {
    components: {
        Header1
    }
}
</script>

<style lang="scss">
@import "~/scss/main";

</style>