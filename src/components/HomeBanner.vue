<template>
    <div>
         <div class="container-fluid">
              <div class="row" style="overflow: hidden;">
                <transition v-if="show" appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
                  <div  class="col-md-6">
                      <div class="intro">I am Simeon Nortey</div>
                      
                       <!--  
                         <div id="bar">
                        <div id="red">
                        </div>
                        <div id="yellow">
                        </div>
                        <div id="green">
                        </div>
                    </div>
                         <div id="screen">
                            <p class="font">root@10.0.0.1:~$</p>
                        </div> -->
                        <span class="description"></span>
                      <div class="extra">with a passion for creativity and human<br> digital experience</div>
                      <div style="margin-top: 40px">
                          <button @click="next" class="btn rounded-pill btn-primary my-2 my-sm-0 primary" >  see my works</button>
  
                      </div>
                  </div>
                </transition>
                <transition v-if="show" appear name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">

                  <div class="col-md-6">
                      <div>
                          <img class="vert-move img-fluid"  src="img/image.png" alt="">
                      </div>
  
                  </div>
                </transition>
              </div>
            </div>
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