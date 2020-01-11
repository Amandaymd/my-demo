<template>
    <div class="img-style" :style="`background: rgba(${getColor(colors.rgba)})`">
        上传图片组件
        <span @click="show=true">点击</span>
        <span @click="show=false">关闭</span>
        <div v-if="show">
            <Sketch v-model="colors" value="哈哈哈哈哈"></Sketch>
            {{colors.rgba}}
            {{`rgba(${getColor(colors.rgba)})`}}
        </div>
    </div>
</template>

<script>
    import {Sketch} from 'vue-color'

    export default {
        name: 'importImg',
        components: {
            Sketch,
        },

        data() {
            return {
                show: false,
                colors: {
                    hex: '#194d33',
                    hsl: {h: 150, s: 0.5, l: 0.2, a: 1},
                    hsv: {h: 150, s: 0.66, v: 0.30, a: 1},
                    rgba: {r: 125, g: 177, b: 151, a: 1},
                    a: 1,
                },
            }
        },
        methods: {
            getColor(value) {
                let a = Object.values(value)
                a = a.join(',')
                // eslint-disable-next-line no-console
                console.log('转换过的值', a)
                return a

            },
        },
    }
</script>

<style scoped>
    .img-style {
        width: 500px;
        height: 100px;
        margin: 60px auto;
    }

</style>