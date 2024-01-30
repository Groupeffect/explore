import { Application, Ticker} from 'pixi.js'
export default {
    name: 'PixiMixin',
    data: ()=>({
        tickers: {},
        pixiApps:[],
        appConfig:{
            antialias: true,
            // transparent: true,
            resolution: 1,
            background: "rgb(0,0,0)",
            eventMode: 'static',
            eventFeatures: {
                move: true,
                /** disables the global move events which can be very expensive in large scenes */
                globalMove: true,
                click: true,
                wheel: true
            }
        }
    }),

    computed: {},
    methods: {
        rN(k=10,n=2){
            // random number
            return Math.round(k*Math.random(n))
        },
        rC(){
            // random color
            var letters = '0123456789ABCDEF'
            var color = '#'
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            return color
        },
        setTicker(name){
            this.tickers[name] = new Ticker()
            return this.tickers[name]
        },
        stage(config){
            const pixiDiv = document.getElementById(config.id)
            const pixiAppConfig = {
                ...config.app,
                resizeTo: pixiDiv,
                autoResize: true,
            }
            const pixi = new Application(pixiAppConfig)
            pixiDiv.appendChild(pixi.view)
            this.pixiApps.push({div:pixiDiv, app:pixi})
            return pixi
        },
        destroyPixiApp(app) {
            // // Destroy children, this is recursive to all children's children
            // app.stage.destroy({children: true, texture: true, baseTexture: true})
            console.log("destroy 1")
            if(app && app.stage){
            console.log("destroy 2")
                app.destroy({children: true, texture: true, baseTexture: true, })
            }
            
            // // Destroy the renderer and plugins
            // app.renderer.destroy()
            
            // // Remove the view (canvas) from the DOM if it's there
            // if (app.view.parentNode) {
            //     app.view.parentNode.removeChild(app.view)
            // }
            
            // // Optional: Set the reference to the app to null to ensure garbage collection
            app = null
        },
        numberTo8BitArray(number) {
            const bits = new Array(8).fill(0) // Initialize an array of 8 elements
            
            for (let i = 0; i < 8; i++) {
                bits[7 - i] = (number & 1) ? 1 : 0 // Extract the rightmost bit and assign
                number >>= 1 // Shift right by one position
            }
            
            return bits // Return the array
        },
        numberTo3BitArray(number) {
            const bits = new Array(3).fill(0) // Initialize an array of 3 elements
            
            for (let i = 0; i < 3; i++) {
                bits[2 - i] = (number & 1) ? 1 : 0 // Extract the rightmost bit and assign
                number >>= 1 // Shift right by one position
            }
            
            return bits // Return the array
        },
        destroyAllApps(){
            console.log(this.pixiApps)
            this.pixiApps.map((e)=>{
                // e.renderer.destroy()
                // e.destroy({children: true, texture: true, baseTexture: true, removeView:true})
                // .removeChild(e.div)
                e.app.destroy({children: true, texture: true, baseTexture: true})
                // e.destroy()
                
            })
        }

    }
    // beforeRouteLeave (to, from , next) {
    //     this.destroyAllApps()
    //     next()
    // },
    // beforeRouteEnter (to, from , next) {
    //     this.destroyAllApps()
    //     next()
    // },
    // beforeRouteUpdate(to,from,next){
    //     console.log("RUUU")
    // },
    // beforeEach(to,from,next){
    //     console.log("RUssUU")
    // }


}