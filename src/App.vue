<template>
    <Header1 />
    <RouterView />
    <Footer1 />
</template>

<script>
import Header1 from '~/components/Header1'
import Footer1 from '~/components/Footer1'

export default {
    components: {
        Header1,
        Footer1
    }
}
</script>

<style lang="scss">

</style>