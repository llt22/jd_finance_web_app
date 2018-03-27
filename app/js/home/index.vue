<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import HSlider from './hslider'
    import Novice from './novice'
    import Borrow from './borrow'
    import Money from './money'
    import Product from './product'

    export default {
        components: {
            Heador,
            HSlider,
            Novice,
            Borrow,
            Money,
            Product
        }
    }
</script>

<style lang="scss">
</style>
