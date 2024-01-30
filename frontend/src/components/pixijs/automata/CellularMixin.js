import { Graphics } from 'pixi.js'
import automataConfig from "@/assets/configs/automata.json"

export default {
    name: 'CellularMixin',
    data:()=>({
        rule: 57
    }),
    computed: {
        ruleSet(){
            return {
                neighborIndexes: ["000","001","010","011","100","101","110","111"],
                mapping: this.numberTo8BitArray(this.rule),
            }
        }
    },
    methods: {
        run(pixi, config, ruleSet) {
            if(pixi){
                this.destroyPixiApp(pixi)
            }
            if(config && config.data && config.data.app){
                this.runCellularAutomata(this.stage(config.data), config, ruleSet)
            }
        },
        runCellularAutomata(app, config, ruleSet) {
            this.frame(app,config, ruleSet)
        },

        
        element(x=0,y=0,w=10,h=10, color='rgba(255,255,255,1)') {            
            const rect = new Graphics()
            rect.beginFill(color)
            rect.drawRect(x,y,w,h)
            rect.endFill()
            
            return rect
        },

        generate(app, config, col, row){
            app.stage.addChild(
                this.element(
                    col * config.data.element.spacing,
                    row * config.data.element.spacing,
                    config.data.element.width,
                    config.data.element.height,
                    config.data.element.color,
                )
            )
        },

        frame(app, config, ruleSet){
            if(config && config.data) {
                const rows = Array.from(Array(Number(config.data.element.rows)).keys())
                const cols = Array.from(Array(Number(config.data.element.cols)).keys())
                const cells = cols.map(()=>Math.random() < 0.5 ? 0 : 1)
                // const cells = cols.map(()=>0)
                // Iter rows and cols 
                // check neighbors
                // exclude first and last array element
                rows.map((row)=>{
                    cols.map((col)=>{

                        if( cells[col] == 1 ) {
                            this.generate(app, config, col, row)
                        }
                        
                        if(col > 0 && col < cols.length - 1){

                            const ruleCheck = `${cells[col-1]}${cells[col]}${cells[col+1]}`
                            const ruleIndex = ruleSet.neighborIndexes.indexOf(ruleCheck)
                            cells[col] = ruleSet.mapping[ruleIndex]
                        }
                })})
            }
        }
    },
}