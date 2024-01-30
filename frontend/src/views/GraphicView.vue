<template>
    <div>
        <RouterView v-if="$route.name != 'GraphicView'"></RouterView>
        <v-row v-else>
            <v-col>
                <v-card max-width="500">
                    <v-card-title>
                        Cellular Automata
                    </v-card-title>
                    <CellularView></CellularView>
                    <v-card-actions>
                        <v-btn color="success" @click="$router.replace({name:'CellularView'})">Edit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-card max-width="500">
                    <v-card-title>
                        Floating Logos
                    </v-card-title>
                    
                    <v-card-actions>
                        <v-btn color="success" @click="$router.replace({name:'FloatingLogos'})">Show</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CellularView from '@/components/pixijs/automata/CellularView.vue'

export default {
    name: 'GraphicView',
    props: {},
    components: { CellularView },
    data: ()=>({}),
    computed: {},
    methods: {},
    created(){},

}
</script>
<style>
</style>