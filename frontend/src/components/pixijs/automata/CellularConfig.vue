<template>
    <v-card>
        <v-row class="config" dense >
            <v-col >
                <v-card flat max-width="300">
                    Background or Elelemt Color
                    <v-switch 
                    hide-details :label="!color?'Background':'Element'"  v-model="color"></v-switch>
                    
                    <div v-if="!color" class="d-flex justify-space-around">
                        <v-color-picker
                        v-model="config.app.background"
                        hide-inputs
                        ></v-color-picker>
                    </div>
                    <div v-else class="d-flex justify-space-around">
                        <v-color-picker
                        v-model="config.element.color"
                        hide-inputs
                        ></v-color-picker>
                    </div>
                    [[ config.app.background ]]

                </v-card>
            </v-col>

            <v-col>
                <v-card flat>
                    Div Config
                    <v-row align="center">
                        <v-col>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Width"
                                type="number"
                                v-model="config.div.width"
                                step="4"
                                :max="config.div.maxWidth"
                                :min="config.div.minWidth">
                            </v-text-field>
                            <v-text-field
                                label="Height"
                                type="number"
                                v-model="config.div.height"
                                step="4"
                                :max="config.div.maxHeight"
                                :min="config.div.minHeight">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col class="ml-2">
                <v-card flat>
                    App Config
                    <v-switch 
                        @update:model-value="config.updated = Date.now()"
                        hide-details label="globalMove" v-model="config.app.eventFeatures.globalMove"></v-switch>
                    <v-switch 
                    @update:model-value="config.updated = Date.now()"
                    hide-details label="move"  v-model="config.app.eventFeatures.move"></v-switch>
                    <v-switch 
                        @update:model-value="config.updated = Date.now()"
                        hide-details label="wheel"  v-model="config.app.eventFeatures.wheel"></v-switch>
                    <v-switch 
                        @update:model-value="config.updated = Date.now()"
                        hide-details label="click"  v-model="config.app.eventFeatures.click"></v-switch>
                </v-card>
            </v-col>

            

            <v-col>
                <v-card flat>
                    Element Config
                    <v-row align="center">
                        <v-col>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Width"
                                type="number"
                                v-model="config.element.width"
                                step="1"
                                :max="config.element.maxWidth"
                                :min="config.element.minWidth">
                            </v-text-field>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Height"
                                type="number"
                                v-model="config.element.height"
                                step="1"
                                :max="config.element.maxHeight"
                                :min="config.element.minHeight">
                            </v-text-field>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Rows"
                                type="number"
                                v-model="config.element.rows"
                                step="1"
                                max="500"
                                min="1">
                            </v-text-field>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Cols"
                                type="number"
                                v-model="config.element.cols"
                                step="1"
                                max="500"
                                min="1">
                            </v-text-field>
                            <v-text-field
                                @update:model-value="config.updated = Date.now()"
                                label="Spacing"
                                type="number"
                                v-model="config.element.spacing"
                                step="1"
                                max="80"
                                min="1">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-card-action>
            <v-btn size="small" color="success" block @click="config.updated = Date.now()">apply</v-btn>
        </v-card-action>
    </v-card>
</template>
<script>
import ConfigMixin from '@/components/pixijs/automata/ConfigMixin.js';
export default {
    name: 'CellularConfig',
    props: {},
    mixins: [ConfigMixin],
    components: {},
    data: ()=>({}),
    computed: {},
    methods: {},
    created(){}
}
</script>
<style>
</style>