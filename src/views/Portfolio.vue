<template>
    
    <div id="portfolio" class="container-main">
            <div class="inner-wrapper">
                <div class="container" style="text-align: center; padding-bottom: 50px">
                            <transition    appear name="custom-classes-transition"  enter-active-class="animated slideInRight" >
                                <h2>Portfolio</h2>
                            </transition>
                    <p style="text-align:center">A peek into my brain, see how I execute and deliver each project</p>
                </div>
            </div>
                <div class="container-fluid">
                            <transition    appear name="custom-classes-transition"  enter-active-class="animated bounceIn" >

                    <div class="row">
                        <router-link :to="`/project/${index + 1}`" v-for="(project, index) in projects" :key="index" class="col-lg-4 col-md-6">
                            <div class="sub-card__stack" :style="{ backgroundImage: `url('${project.img}')`,backgroundPosition: 'center', backgroundSize: 'cover' }">
                                <div class="overlay">
                                    <div class="text">
                                        <h2>{{project.name}}</h2>
                                        <p>{{project.sub}}</p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        
                        </div>
                            </transition>
                        
                        
                    </div>
                </div>
                
            </div>
</template>

<script>
    import {projects} from './projects'
    export default {
        data() {
            return {
                projects: projects
            }
        },
        mounted() {
          $(document).ready(function() {

            VANTA.BIRDS({
                el: "#portfolio",
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
                quantity: 5.00
              })
        })
    }
    }
    
</script>

<style  scoped>
body {
    overflow: auto;
}
</style>