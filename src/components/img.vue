<template>
    <div class="hello">
        <picture-input
            class="picture"
            ref="pictureInput"
            @change="onChange"
            width="200"
            height="200"
            margin="16"
            accept="image/jpeg,image/png"
            size="10"
            buttonClass="btn"
            :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a GIF or GTFO'
      }">
        </picture-input>
    </div>
</template>

<script>
    import PictureInput from 'vue-picture-input'

    export default {
        name: 'img-btn',
        data () {
            return {
            }
        },
        components: {
            PictureInput
        },
        methods: {
            onChange () {
                // eslint-disable-next-line no-console
                console.log('New picture selected!')
                if (this.$refs.pictureInput.image) {
                    // eslint-disable-next-line no-console
                    console.log('Picture loaded.')
                } else {
                    // eslint-disable-next-line no-console
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }
        }
    }
</script>

<style scoped>
    .hello{
        width: 200px;
        height: 200px;
    }
    .picture{
        width: 100%;
        height: 100%;
    }
</style>