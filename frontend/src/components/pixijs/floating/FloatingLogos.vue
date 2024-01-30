<template>
  <div >
      <div :id="pixiAppId || 'pixi'"></div>
    <!-- <v-card :width="400" color="black">
      Welcome to the Groupeffect Home Page
    </v-card> -->
  </div>
</template>
<script>
import PixiMixin from "@/mixins/pixi/PixiMixin.js"
import RisingWaves from '@/mixins/pixi/RisingWaves.js'
import RisingLogos from '@/mixins/pixi/RisingLogos.js'
import TextMask from '@/mixins/pixi/TextMask.js'
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
    
    this.loadPixiContent(this.stage())
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