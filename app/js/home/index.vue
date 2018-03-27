<template lang="html">
    <div>
        <Heador></Heador>
        <HSlider></HSlider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <Footer></Footer>
        <Nav></Nav>
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
    import Footer from '../public/footer'
    import Nav from '../public/navbar'

    export default {
        components: {
            Heador,
            HSlider,
            Novice,
            Borrow,
            Money,
            Product,
            Life,
            Footer,
            Nav
        }
    }
</script>

<style lang="scss">
</style>
