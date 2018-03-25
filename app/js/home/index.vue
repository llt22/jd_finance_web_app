<template lang="html">
    <div :class="$style.home">
        <h1>Home</h1>
        <input type="button" value="点击我" :class="$style.btn">
        <div :class="$style.panel">
            <h4>我是标题</h4>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';
    @import '../../css/element.scss';

    .home {
        color: red;
        font-size: 80px;
    }

    .btn {
        @include btn()
    }
    .panel {
        @include panel()
    }
</style>
