<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import HSlider from './hslider'

    export default {
        components: {
            Heador,
            HSlider
        }
    }
</script>

<style lang="scss">
    @import '../../css/element';

    .btn {
        background-color: #fff;
    }
</style>
