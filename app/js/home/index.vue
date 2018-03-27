<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
        <Novice></Novice>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import HSlider from './hslider'
    import Novice from './novice'

    export default {
        components: {
            Heador,
            HSlider,
            Novice
        }
    }
</script>

<style lang="scss">
</style>
