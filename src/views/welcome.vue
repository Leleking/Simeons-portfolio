<template>
    <div id="home-bg" style="height: 90vh" class="container-main">
      <section id="home">
         <div class="container-fluid">
              <div class="row">
                <transition appear name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
                  <div  class="col-lg-8 col-md-8 col-sm-12">
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
                      <div class="extra">Passion for creativity and human<br> digital experience</div>
                      <div style="margin-top: 40px">
                          <button @click="route" class="btn rounded-pill btn-primary my-2 my-sm-0 primary" >  see my works</button>
  
                      </div>
                  </div>
                </transition>
                <transition appear name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">

                  <div class="col-md-4 col-md-4 col-sm-12">
                     <img class="vert-move img-fluid" src="img/simeon.png"  alt="">
                      <!-- <div class="vert-move">
                         
                           
                        <div id="bar">
                        <div id="red">
                        </div>
                        <div id="yellow">
                        </div>
                        <div id="green">
                        </div>
                    </div>
                         <div id="screen">
                            <p class="font">simeon@Simeons-Portfolio languages % ls</p>
                            <div class="row">
                              <div v-for="(lang, index) in languages" :key="index" style="color: white" class="col-md-3">
                                {{lang}}
                              </div>

                            </div>
                            <p class="font">simeon@Simeons-Portfolio languages % ls ../frameworks </p>
                            <p class="font">simeon@Simeons-Portfolio frameworks % ls </p>
                            <div class="row">
                              <div v-for="(lang, index) in frameworks" :key="index" style="color: white" class="col-md-3">
                                {{lang}}
                              </div>

                            </div>
                            <p class="font">simeon@Simeons-Portfolio languages % ls</p>
                         </div>
  
                  </div> -->
                  </div>
                </transition>
              </div>
            </div>
      </section>
    </div>
</template>

<script>
import Typed from 'typed.js';
    export default {
        data() {
            return {
                status: "value",
                languages: ["Html5", "Css", "Javascript", "Python", "Php"],
                frameworks: ["Laravel", "Vue.js", "Django", "Flask", "React Native"]
            }
        },
       
        methods: {
            route() {
                this.$router.push('/portfolio')
            }
        }, 
        mounted() {
          var typed = new Typed('.description', {
            strings: ["Welcome to my portfolio ☺️", "A proactive and highly motivated young software developer with a proven record in generating profitable and reliable solutions "],
            typeSpeed: 70,
            loop: true,
            backDelay: 2000,
            backSpeed: 0,
            backSpeed: 30,

          })
          $(document).ready(function() {

            VANTA.BIRDS({
                el: "#home-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffffff,
                birdSize: 0.50,
                wingSpan: 32.00,
                speedLimit: 2.00,
                separation: 99.00,
                alignment: 55.00,
                cohesion: 24.00,
                quantity: 4.00
              })
    })
        }
       
    }
</script>

<style  scoped>
body {
    overflow: hidden;
}
</style>