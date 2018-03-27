<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
        <Novice></Novice>
        <Borrow></Borrow>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import HSlider from './hslider'
    import Novice from './novice'
    import Borrow from './borrow'

    export default {
        components: {
            Heador,
            HSlider,
            Novice,
            Borrow
        }
    }
</script>

<style lang="scss">
</style>
