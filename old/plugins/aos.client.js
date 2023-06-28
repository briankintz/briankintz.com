import Vue from 'vue'
import AOS from 'aos'

Vue.use(
  AOS.init({
    offset: 200,
    duration: 500,
    anchorPlacement: 'bottom-bottom',
  })
)
