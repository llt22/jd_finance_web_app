<template lang="html">
    <section :class="[panelClass, cname]">
        <h4>-{{ title }}-</h4>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                panelClass: 'btn'
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

    .btn {
        @include panel()
    }
</style>