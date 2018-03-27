<template lang="html">
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script type="text/ecmascript-6">
    import Slider from '../core/slider'
    import Panel from '../core/panel'

    export default {
        data() {
            return {
                items: [
                    {
                        targetURL: "home",
                        imgURL: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },
                    {
                        targetURL: "home",
                        imgURL: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },
                    {
                        targetURL: "home",
                        imgURL: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },
                    {
                        targetURL: "home",
                        imgURL: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },
                    {
                        targetURL: "home",
                        imgURL: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    },

                ],
                options: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                    freeMode: true,
                },
            }
        },
        components: {
            Slider,
            Panel
        }
    }
</script>

<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide{
                a{
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            position: relative;
            &>div{
                position: absolute;
                font-size: 28px;
                color: #999;
                right:20px;
                top: -70px;
            }
        }
    }
</style>
