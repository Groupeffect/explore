import { Graphics } from 'pixi.js'
export default {
    name: 'CellularAutomataMixin',
    data:()=>({
        order: 0,
        counter: 0,
        row:0,
        list:null,
        pixels : []
    }),
    methods: {
     

        demoFrame(app, config){
            if(config && config.data) {
                const rows = Array.from(Array(Number(config.data.element.rows)).keys())
                const cols = Array.from(Array(Number(config.data.element.cols)).keys())
                const cells = cols.map(()=>Math.random() < 0.5 ? 0 : 1)

                console.log(cells)

                // Iter rows and cols 
                rows.map((row)=>{
                    cols.map((col)=>{
                        this.generate(app, config, col, row)
                })})
            }
        },
        
        anim0(app, dimensions) {
            const name = 'main'
            const ticker = this.setTicker(name)
            this.list = Array.from(Array(dimensions.cols).keys()).map(()=>Math.random() <= 0.5)
            console.log(this.list)

            ticker.add((delta)=>{
                this.counter += 1
                if(this.counter % dimensions.speed === 0) {
                    console.log(new Date(Date.now()))
                    console.log(this.list)
                    const newList = []
                    
                    this.list.map((e,i)=>{
                        if(e === true){
                            console.log(e)
                            this.pixels.push(
                                this.element(
                                    i * dimensions.cols,
                                    this.row * dimensions.rows,
                                    // dimensions.cols - dimensions.padding,
                                    // dimensions.rows - dimensions.padding,
                                )
                            )
                        }
                        let v = Math.random() <= 0.5
                        newList.push(v)
                    })
                    
    
                    this.pixels.map(e=>{
                        app.stage.addChild(e)
                    })
                    this.pixels = []
                    this.row += 1
                    this.order +=1
                    this.list = newList
                    
                }

                if(this.row >= dimensions.rows ) {
                    ticker.stop()
                }


                
                

                //     this.counter = 0
                    
                //     if (this.order >= h) {
                //         ticker.stop()
                //     }
                // }

            })
            ticker.start()
        }
    },
}