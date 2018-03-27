<template lang="html">
    <Panel title="极速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{ name: 'home' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script type="text/ecmascript-6">
    import Panel from '../core/panel'

    export default {
        components: {
            Panel
        },
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
    @import '../../css/element.scss';

    .panel{
        @include panel;
        >h4{
            border-bottom: 1px solid #ddd;
            font-weight: 700;
            text-align: center;
        }
        .content{
            text-align: center;
            padding-top: 40px;
            padding-bottom: 40px;
            img {
                width: 95%;
            }
        }
    }
</style>
