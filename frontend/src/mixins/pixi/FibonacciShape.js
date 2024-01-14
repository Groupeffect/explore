import { Graphics } from 'pixi.js'
export default {
    name: 'FibonacciShape',
    methods: {
        drawFibonacciCircles(app) {
            let fib = [0, 1];
            let maxIndex = 15; // You can adjust this for more or fewer circles
            let scale = 10; // Scale factor for circle sizes
  
            // Generate Fibonacci sequence
            for (let i = 2; i < maxIndex; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
  
            // Initial position
            let posX = 0
            let posY = app.screen.height / 2;
  
            // Draw circles
            fib.forEach((num, index) => {
                let circle = new Graphics();
                circle.lineStyle(2, 0xFFFFFF, 1);
                circle.drawCircle(0, 0, fib[index] * scale);
                circle.x = posX;
                circle.y = posY;
  
                // Update position for the next circle
                if (index > 0) {
                    posX += (fib[index] + fib[index - 1]) * scale;
                }
  
                app.stage.addChild(circle)
            })
        },
    }
}