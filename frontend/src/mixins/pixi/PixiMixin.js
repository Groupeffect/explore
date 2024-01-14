import { Application, Ticker} from 'pixi.js'
export default {
    name: 'PixiMixin',
    data: ()=>({
        tickers: {},
        pixiAppId: "pixi",
        pixi: null,
        appConfig:{
            antialias: true,
            // transparent: true,
            resolution: 1,
            background: "rgb(0,0,00)",
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
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        setTicker(name){
            this.tickers[name] = new Ticker()
            return this.tickers[name]
        },
        stage(){
            const pixiDiv = document.getElementById(this.pixiAppId)
            const pixiAppConfig = {
                ...this.appConfig,
                resizeTo: pixiDiv,
                autoResize: true,
            }
            const pixi = new Application(pixiAppConfig)
            pixiDiv.appendChild(pixi.view)
            this.pixi = pixi
            return pixi
        },

    },
    beforeRouteLeave (to, from , next) {
        this.$destroyPixiApp(this.pixi)
        this.pixi = null
        next()
    },
    beforeRouteEnter (to, from , next) {
        this.$destroyPixiApp(this.pixi)
        this.pixi = null
        next()
    },

}