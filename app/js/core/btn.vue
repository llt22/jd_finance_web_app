<template lang="html">
    <div :class="[btnClass, cname]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                btnClass: this.$style.btn
            }
        },
        props: {
            cname: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" module>
    @import '../../css/element';

    .btn {
        @include btn()
    }
</style>