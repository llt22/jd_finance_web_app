<template lang="html">
    <section :class="[cname]">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.targetURL">
                <router-link :to="{name: items.targetURL}">
                    <img :src="item.imgURL" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {
            options: {
                type: Object,
                default() {
                    return {
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        },
                        notNextTick: false
                    }
                }
            },
            items: {
                type: Array,
                default() {
                    return [
                        {
                            imgURL: '',
                            targetURL: ''
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" module>
</style>