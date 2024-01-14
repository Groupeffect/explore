import { Graphics, Circle} from 'pixi.js'
export default {
    name: 'RisingWaves',
    methods: {
        waveInstance(app, x=10, y=10, lineWidthRange=[2,1], speed=1.5){

            let startX = 10 
            let startY = 10 
            let size = Math.random()*20
            let instance = new Graphics()

            instance.lineStyle(
                // 1 -> 10
                Math.floor(Math.random() * lineWidthRange[0]) + lineWidthRange[1],
                // 0xFFFFFF,
                this.rC(),
                8
            )
            instance.drawCircle(x, y, size);
            instance.x = x + startX
            instance.y = app.screen.height - 100//y + startY
            instance.alpha = 1


            // instance.on("pointerover", ()=>{
                
            //     console.log("HIT")
            //     console.log(instance.id)
            //     this.tickers[instance.id].stop()
            //     instance.destroy()
            // })

            app.stage.addChild(instance)
            // instance.hitArea = new Circle(instance.x, instance.y, size)
            // instance.hitArea = new Circle(0, 0, size)
            
            const t = `instance${x}${y}`
            const ticker = this.setTicker(t)
            instance.id = t
            ticker.add((delta)=>{



                if( instance.alpha <= 0 || instance.y <= Math.random()*(-50) ){
                    // reset to bottom 
                    instance.y = app.screen.height + startY
                    instance.x = Math.random()*(150)
                    instance.alpha = 1
                    
                }
                // rising until reached top or not visible
                instance.y -= speed
                instance.x -= Math.cos(x)
                instance.alpha -= Math.random()/1000

                // this.tickers[t].stop()
                // console.log(t)
            })
            ticker.start()
        },
        
        drawWave(app){
            const X = Array.from(Array(Math.round(app.screen.width)).keys())
            const ratio = 100
            const speed = 1.1
            X.map(x=>{
                if(x%ratio == 0){
                    this.waveInstance(app,x,Math.random()*100, [2,1], 0.2*speed)
                    this.waveInstance(app,x,Math.random()*100, [2,1], 0.3*speed)
                    this.waveInstance(app,x+5,Math.random()*100 +50, [3,1], 0.4*speed)
                    this.waveInstance(app,x+10,Math.random()*100+ 100,[2,0.3], 0.5*speed)
                    this.waveInstance(app,x+10,Math.random()*100+ 200, [2,0.5], 0.6*speed)
                    this.waveInstance(app,x+10,Math.random()*100+ 300, [2,0.5], 0.7*speed)
                }
            })           
                
        },
    }
}