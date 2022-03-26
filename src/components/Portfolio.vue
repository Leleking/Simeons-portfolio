<template>
    <div>
    <transition v-if="!show" appear name="custom-classes-transition" enter-active-class="animated zoomInDown" leave-active-class="animated fadeOutLeft">

    <section id="portfolio">
        <div class="master-container">
          <h2>Portfolio</h2>
          <p>A peek into my brain, see how I execute and deliver each project</p>
          <div></div>
        </div>
      </section>
    </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: "value"
            }
        },
        props: {
            show: {
                required: true
            },
        },
        methods: {
            next() {
                this.$emit('next')
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>