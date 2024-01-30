<template>
  <div >
      <div id='pixi'></div>
    <!-- <v-card :width="400" color="black">
      Welcome to the Groupeffect Home Page
    </v-card> -->
  </div>
</template>
<script>
import PixiMixin from "@/mixins/pixi/PixiMixin.js"
import RisingWaves from '@/components/pixijs/floating/RisingWaves.js'
import RisingLogos from '@/components/pixijs/floating/RisingLogos.js'
import TextMask from '@/components/pixijs/floating/TextMask.js'
export default {
  name: 'FloatingLogos',
  mixins:[PixiMixin, RisingWaves, RisingLogos, TextMask],
  methods:{
    loadPixiContent(pixi){
            // this.drawFibonacciCircles(pixi)
            this.drawWave(pixi)
            this.drawLogoWave(pixi)
            this.drawTextMask(pixi)
        }
  },
  mounted(){
    
    this.loadPixiContent(this.stage({
      id:"pixi",
      app:{
            "antialias": true,
            "transparent": false,
            "resolution": 1,
            "background": "#000000",
            "eventMode": "static",
            "eventFeatures": {
                "move": false,
                "globalMove": false,
                "click": false,
                "wheel": false
            }
        }
    }))
  }
}
</script>
<style scoped>
#pixi{
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>