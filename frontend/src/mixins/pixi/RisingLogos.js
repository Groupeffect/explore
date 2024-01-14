import { Graphics, Sprite} from 'pixi.js'
import vuetify from "@/assets/logos/vuetify.png"
import postgresql from "@/assets/logos/postgresql.png"
import django from "@/assets/logos/django.png"
import python from "@/assets/logos/python.png"
import nodejs from "@/assets/logos/nodejs.png"
import docker from "@/assets/logos/docker.png"
import vue from "@/assets/logos/vue.png"
import pixijs from "@/assets/logos/pixijs.png"
import nginx from "@/assets/logos/nginx.png"
import redis from "@/assets/logos/redis.png"
import github from "@/assets/logos/github.png"
export default {
    name: 'RisingLogos',
    data: ()=>({
        logos: [
            {src:github, w:50,h:50, url:"https://github.com"},
            {src:pixijs, w:100,h:40, url: "https://pixijs.com"},
            {src:vuetify, w:50,h:50},
            {src:nodejs, w:60,h:40},
            {src:vue, w:60,h:60},
            {src:postgresql, w:50,h:60},
            {src:python, w:60,h:60},
            {src:django, w:120,h:40},
            {src:docker, w:70,h:60},
            {src:nginx, w:80,h:40},
            {src:redis, w:50,h:40},
        ]
    }),
    methods: {
        waveLogoInstance(app,logo, x=10, y=10, lineWidthRange=[2,1], speed=1.5){

            let startX = 10 
            let startY = 40 
            let size = Math.random()*20

            let instance = Sprite.from(logo.src)
            instance.x = app.screen.width * Math.random()
            instance.y = app.screen.height - startY

            let scale = Math.random() * 200 

            instance.width = logo.w*2 - logo.w/100 * scale
            instance.height = logo.h*2 - logo.h/100 * scale
            app.stage.addChild(instance)
            instance.hitArea = null

            if(logo && logo.url) {
                instance.addListener("pointerdown", ()=>{
                    window.location = logo.url
                })
            }

            const name = `logos${1}`
            const ticker = this.setTicker(name)
            ticker.add((delta)=>{
                
                if ( instance.alpha <= 0.1 || instance.y < 0 || instance.x < 0 || instance.x >= app.screen.width ) {
                    instance.y = app.screen.height - 100
                    instance.x = app.screen.width * Math.random()
                    instance.alpha = 1
                    instance.rotation = Math.random()

                    let scale = Math.random() * 100
                    instance.width = logo.w*2 - logo.w/100 * scale
                    instance.height = logo.h*2 - logo.h/100 * scale
                }   


                instance.y -= Math.random() * speed
                instance.x -= Math.random() < 0.5  ? Math.sin(0.5) : -Math.sin(0.5)
                instance.alpha -= Math.random() / 300

                instance.x >= app.screen.width/2 ?
                instance.rotation += Math.random()/100 
                : instance.rotation -= Math.random()/100 
            })
            this.tickers[name].start()
           
        },
        
        drawLogoWave(app){
            const X = Array.from(Array(Math.round(app.screen.width)).keys())
            console.log(X)
            this.logos.map((e,i)=>{
                    setTimeout(()=>{
                        this.waveLogoInstance(app,e)
                    },i*Math.random()*4000)
                }
            )
                
        },
    }
}