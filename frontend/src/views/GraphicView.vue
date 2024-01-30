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
                        <v-btn @click="$router.push({name:'CellularView'})">Edit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CellularView from '@/components/pixijs/automata/CellularView.vue';

export default {
    name: 'GraphicView',
    props: {},
    components: { CellularView },
    data: ()=>({}),
    computed: {},
    methods: {},
    created(){}
}
</script>
<style>
</style>