<template>
    <div :class="$style.hslider">
        <Slider :items="items"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in entries" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import Slider from '../core/slider'

    export default {
        data() {
            return {
                items: [
                    {
                        imgURL: 'https://img12.360buyimg.com/jrpmobile/jfs/t15841/116/2678213635/24286/b0e919db/5ab386c2Ndc61eee8.jpg?width=750&height=320',
                        targetURL: 'https://h5.m.jd.com/dev/4P8gj3GYHAooQgYGvrh2cQCdeW9W/index.html?sid=&qingfrom=pcurl/?from=jrad_1830098'
                    },
                    {
                        imgURL: 'https://img12.360buyimg.com/jrpmobile/jfs/t14677/259/2692320740/48815/dc123010/5ab386a9N6d74c344.jpg?width=750&height=320',
                        targetURL: 'https://m.jr.jd.com/mjractivity/42608-3.html?sid=&qingfrom=pcurl/?from=jrad_1830098'
                    },
                    {
                        imgURL: 'https://img12.360buyimg.com/jrpmobile/jfs/t15676/247/2538809957/41087/aac15da2/5ab3869eN9282380d.jpg?width=750&height=320',
                        targetURL: 'https://active.jd.com/2017/hangyejie/html/index.html?type=m&xd=jrxd&sid=&qingfrom=pcurl/?from=jrad_1830098'
                    }
                ],
                entries: [
                    {
                        href: 'download',
                        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                        title:'优惠券'
                    },
                    {
                        href: 'home',
                        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                        title:'领红包'
                    },
                    {
                        href: 'home',
                        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                        title:'抢钢镚'
                    },
                    {
                        href: 'home',
                        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                        title:'白条提额'
                    }
                ]
            }
        },
        components: {
            Slider
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import '../../css/element';

    .hslider {
        margin-top: 100px;
        img {
            // 让 slider 图片铺满屏幕
            width: 100%;
        }
    }
    .list {
        @include list(row);
        height: 144px;
        background-color: #fff;
        padding-top: 40px;
        .item {
            flex: 1;
            text-align: center;
            img {
                width: 90px;
                height: 90px;
            }
            h4 {
                font-size: 26px;
                color:#666;
                margin-top: 12px;
            }
        }
    }
</style>
