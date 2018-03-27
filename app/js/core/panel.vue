<template lang="html">
    <section :class="panelClass">
        <h4 v-if="title">-{{ title }}-</h4>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                panelClass: this.$style.panel
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            cname: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" module>
    @import '../../css/element.scss';

    .panel {
        @include panel()
    }
</style>