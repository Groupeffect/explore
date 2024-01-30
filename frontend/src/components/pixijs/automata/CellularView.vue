<template>
    <div ref="pixiview">
        <div v-if="configuration && configuration.data && configuration.data.div">
            <div :id="configuration.data.id" :style="{width:`${configuration.data.div.width}px`,height:`${configuration.data.div.height}px`}"></div>
        </div>
        <div v-if="$route.name == 'CellularView'">
            <v-card>

                <div class="mb-4">
                    <b>Cellular Atutomata Rule Set</b>
                    <div v-for="(e,k) in ruleSet" :key="k">
                        [[k]] : [[ ruleSet[k] ]]
                    </div>
                </div>

                <v-row justify="center" class="text-center">
                    <v-col>
                        <v-text-field class="config-number-input" v-model="rule" label="Cellular Rule Number" step="1" type="number" min="0" max="256"></v-text-field>
                    </v-col>

                    <v-col>
                        <v-btn size="small" color="success" block @click="go()">Run</v-btn>
                    </v-col>
                </v-row>
            </v-card>

            <CellularConfig></CellularConfig>

        </div>
    </div>
</template>
<script>
import PixiMixin from "@/mixins/pixi/PixiMixin.js"
import CellularMixin from '@/components/pixijs/automata/CellularMixin.js'
import ConfigMixin from '@/components/pixijs/automata/ConfigMixin.js'
import automataConfig from "@/assets/configs/automata.json"
// Controlls
import CellularConfig from "@/components/pixijs/automata/CellularConfig.vue"
import { useRepo } from "pinia-orm"
import Internal from "@/models/Internal"
export default {
    name: 'CellularView',
    components: { CellularConfig },
    mixins:[PixiMixin, CellularMixin, ConfigMixin],
    props:{
        configProp: Object,
        ruleSetProp: Object
    },
    data: ()=>({
    }),
    computed: {

    },
    methods: {
        go(){
            this.run(this.configuration, this.ruleSetProp || this.ruleSet)
        }
    },
    mounted(){
        this.config.updated = 0
        this.go()
    },
    created(){
        const conf = useRepo(Internal).find("automata-default")
        const cc = conf && conf.data
        this.config = this.configProp || cc || automataConfig.default
    },
    // beforeRouteLeave (to, from , next) {
    //     console.log("leave CellularView")
    //     this.destroyAllApps()
    //     next()
    // }
}
</script>
<style>
</style>