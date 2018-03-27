<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import HSlider from './hslider'
    import Novice from './novice'
    import Borrow from './borrow'
    import Money from './money'
    import Product from './product'
    import Life from './life'

    export default {
        components: {
            Heador,
            HSlider,
            Novice,
            Borrow,
            Money,
            Product,
            Life
        }
    }
</script>

<style lang="scss">
</style>
