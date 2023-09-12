const SPEED = 50;
export class Particle {
    constructor(targetX, targetY, X , Y){
        this.targetX = targetX;
        this.targetY = targetY;
        this.x = X;
        this.y = Y;
        this.lastUpdate = 0;
    }
    update(time){
        if(this.lastUpdate === 0){
            this.lastUpdate = time;
        }
        else{
            const delta = time - this.lastUpdate;
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            if(dx !== 0){
                if(dx > -2 && dx < 2){
                    this.x = this.targetX;
                }
                else{
                    this.x += dx / SPEED;
                }
            }
            if(dy !==0){
                if(dy > -2 && dy < 2){
                    this.y = this.targetY;
                }
                else{
                    this.y += dy / SPEED;
                }

            }
        }
    }
    draw(ctx){
        ctx.fillRect(this.x*4, this.y*4,3,3);
    }
}