
import Internal from '@/models/Internal'
import { useRepo } from 'pinia-orm'
import automataConfig from "@/assets/configs/automata.json"
export default {
    name: 'ConfigMixin',
    props: {},
    components: {},
    data: ()=>({
        description: "Add app config to indexdb, set window size and more",
        color: false,
        config: null
    }),
    computed: {
        _configuration(){return {...this.config}},
        configuration(){
            return useRepo(Internal).find(this.config.id)
        }
    },
    watch:{
        _configuration() {
            useRepo(Internal).save(
                {id: this.config.id, data:this._configuration}
            )
        },
    },
    created(){
        this.config = automataConfig.default
        // this.config.div.maxWidth = window.innerWidth
        // this.config.div.width = window.innerWidth
        // this.config.updated = 0
    }
}