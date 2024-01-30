import { Graphics, TextStyle, Text} from 'pixi.js'
export default {
    name: 'TextMask',
    data: ()=>({
        matrix:{update:false, count:0}
    }),
    methods: {
        randomChar() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            return chars.charAt(Math.floor(Math.random() * chars.length))
        },

        textElements(app, mask,x=1,y=0) {
            // 2. Create Text Elements
            const columns = 20
            const drops = []
            for(let i = 0; i < columns; i++) {
                const text = new Text(
                    this.randomChar(), 
                    { fontFamily: 'Arial', fontSize: 20, fill: 0x00ff00 }
                )
                text.x = x * (i * 10) + 1
                text.y = y + 10
                drops[i] = text
                text.mask = mask
                app.stage.addChild(text);
            }
            return drops
        },
        animateText(app, drops) {
            // 3. Animate the Text
            app.ticker.add((delta) => {

                if (this.matrix.count >= 8){

                    
                    for(let i = 0; i < drops.length; i++) {
                        
                        const text = drops[i]
                        text.text = this.randomChar(); // Change to a new character
                        text.y += Math.random()*10; // Move down
                        
                        // Reset the drop
                        if (text.y > app.screen.height/5) {
                            text.y = 0
                        }
                    }
                    this.matrix.count = 0
                    
                }
                this.matrix.count +=1

            });
        },



        drawTextMask(app,string="GROUPEFFECT") {

            const textStyle = new TextStyle({
                fontFamily: 'Arial',
                fontSize: 80,
                fontWeight: 'bold',
                fill: ['#FFFFFF', '0x00ff00'], // Gradient
                stroke: '#4a1850',
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });
            const text = new Text(string, textStyle);
            text.x = 0
            text.y = 0
            text.width = app.screen.width
            text.height = app.screen.height/4
            app.stage.addChild(text);
            
            Array.from(Array(5).keys()).map((e)=>{
                setTimeout(()=>{

                    this.animateText(app,this.textElements(app,text,e*2.5,e))
                }, e*2000)
            })
        }
    },
}