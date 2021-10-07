<template>
    <div id="portfolio" class="container-main">
            <div class="inner-wrapper">
                <div class="container" style="text-align: center; padding-bottom: 50px">
                    <h2>{{project.name}}</h2>
                    <p style="text-align:center">{{project.description}}</p>
                </div>
            </div>
           <section id="project-detail">
                <div  class="container">
                <div  v-for="(sub, index) in project.info" :key="index" >
                    <div v-if="sub.type == 0" class="row align-items-center sub">
                        <div  class="col-md-6">
                            <transition  mode="out-in"  appear name="custom-classes-transition"  enter-active-class="animated fadeIn" >

                                <div style="">
                                    <h2>{{sub.name}}</h2>
                                    <div class="about">{{sub.about}}</div>
                                    <div >
                                            <a :href="sub.link" target="_blank" class="btn btn-outline-success my-2 my-sm-0" >{{sub.link_tag}}</a>

                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="col-md-6">
                           
                            <transition  mode="out-in"  appear name="custom-classes-transition"  enter-active-class="animated fadeInRight" >
                                <div style="">
                                    <img class=" img-fluid"  :src="sub.img" alt="">
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div v-if="sub.type == 1" class="row align-items-center sub" >
                         <div class="col-md-6">
                            <transition    appear name="custom-classes-transition"  enter-active-class="animated fadeInLeft" >
                                <div>
                                    <img class="vert-move img-fluid" :src="sub.img" alt="">

                                </div>
                            </transition>
                        </div>
                        <div class="col-md-6">
                            <h3>{{sub.name}}</h3>
                            <div class="about">{{sub.about}}</div>
                            <div v-if="sub.link">
                                    <a :href="sub.link" target="_blank" class="btn btn-outline-danger my-2 my-sm-0" >{{sub.link_tag}}</a>

                            </div>
                        </div> 
                    </div>
                    <div v-if="sub.type == 2">
                         <div style="text-align: center; padding-top: 50px">
                            <h3>{{sub.name}}</h3>
                            <div>{{sub.about}}</div>
                            <div v-if="sub.link">
                                
                                    <a :href="sub.link" target="_blank" class="btn btn-outline-danger my-2 my-sm-0" >{{sub.link_tag}}</a>

                            </div>
                        </div>
                        
                    </div>
                    <div v-if="sub.type == 3" class="row align-items-center sub">
                        <div  class="col-md-6">
                            <div style="">
                                <h2>{{sub.name}}</h2>
                                <div class="about">{{sub.about}}</div>
                                <div>
                                        <a :href="sub.link" target="_blank" class="btn btn-outline-success my-2 my-sm-0" >{{sub.link_tag}}</a>

                                </div>
                            </div>
                        </div>
                        <div v-for="(img, index) in sub.imgs" :key="index" class="col-md-2">
                            <center><img class=" img-fluid"  :src="img" alt=""></center>
                        </div>
                    </div>
                </div>
            </div>
           </section>
    </div>
</template>

<script>
    import {projects} from './projects'

    export default {
        data() {
            return {
                id: this.$route.params.id - 1,
                project: {}
            }
        },
        methods: {
            init() {
                this.project = projects[this.id]
            }
        },
        created() {
            this.init()
        }
    }
</script>

<style lang="css" scoped>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.about {
    padding-top: 20px;
    padding-bottom: 20px;
}

.sub {
    padding-top: 40px;
    padding-bottom: 20px;
}


</style>