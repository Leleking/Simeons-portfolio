<template>
  <div>
    <section id="vanta">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link to="/" class="navbar-brand"  href="#">
              <img src="/img/logo.png" class="logo"  alt="">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
       
          <div style="text-align:center" class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link" href="#">About Me <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/portfolio" class="nav-link" href="#">Projects</router-link>
              </li>
             
            </ul>
            <div style="text-align: center">
              <form >
              <a href="/simeonnortey.pdf" class="btn rounded-pill btn-primary my-2 my-sm-0 primary" type="submit"><i class="fa fa-download"></i>  Download resume</a>
            </form>
            </div>
          </div>
        </nav>
        
        <transition  mode="out-in"  appear name="custom-classes-transition"  leave-active-class="animated fadeOut">

            <router-view/>
        </transition>

            
        
      </section>
  </div>
</template>

<script>
import HomeBanner from '../components/HomeBanner'
import Portfolio from '../components/Portfolio'
  export default {
    data() {
      return {
        portfolio: true
      }
    },
    components: {
      HomeBanner, Portfolio
    },

    methods: {
      showPortfolio() {
          this.portfolio = !this.portfolio
      }
    },
     mounted() {
          
        }
  }
</script>

