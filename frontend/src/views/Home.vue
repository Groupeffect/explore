<template>
  <div>
    <v-row align="center" class="text-center">
      <v-col cols="2" v-for='(e,k) in createCards()' :key='k'>
      
        <CellularView :configProp="e" :ruleSetProp="e.ruleSet"></CellularView>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { useRepo } from 'pinia-orm'
import Internal from '@/models/Internal'
import CellularView from '@/components/pixijs/automata/CellularView.vue'
import automataConfig from "@/assets/configs/automata.json"
import PixiMixin from "@/mixins/pixi/PixiMixin.js"
export default {
  name: 'HomeView',
  props: {},
  mixins:[PixiMixin],
  components: {CellularView},
  data: ()=>({
    automataConfig: automataConfig
  }),
  computed: {
    internal(){
      return useRepo(Internal).find('graphics')
    },

  },

  methods: {

    createCards(amount=15, offset=100) {
      return Array.from(Array(amount).keys()).map((e)=>({
        ...this.automataConfig.small, id:`auto-${e}`, element:{...this.automataConfig.small.element, color: this.rC()}, ruleSet: this.ruleSet(e+offset)
      }))
    },

    ruleSet(number){
      return {
          neighborIndexes: ["000","001","010","011","100","101","110","111"],
          mapping: this.numberTo8BitArray(number),
      }
    }
  },
  mounted(){
    // const config = useRepo(Internal).find('graphics')

  }
}
</script>
<style>
</style>