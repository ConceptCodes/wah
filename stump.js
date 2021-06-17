
class Stump {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.selected = false;
        this.target = null;
        this.alive = true;
        this.size = 20;
    }

    // whilte -> alive
    // green -> selected
    // yellow -> neighbor is selected
    render() {
        fill('white');
        circle(this.pos.x, this.pos.y, this.size);
    }

    isHit() { 
        fill('red');
        this.selected = true;
    }

    shoot() {
        let dir = createVector(this.pos.x, this.pos.y)
        
    }

}