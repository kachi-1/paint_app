function setup() {
    createCanvas(700, 700);
}

let onPalette = 0;  //flag for palette selected
let c;              //selected palette color for painting
//Palette colors
let pRed = pOrange = pYellow = pGreen = pCyan = pBlue = pMagenta = pBrown = pWhite = pBlack = 0;

function draw() {
    noStroke();
    pRed = new Palette(0, 0, 15, 255, 0, 0);
    pOrange = new Palette(0, 16, 15, 255, 125, 0);
    pYellow = new Palette(0, 32, 15, 255, 255, 0);
    pGreen = new Palette(0, 48, 15, 0, 255, 0);
    pCyan = new Palette(0, 64, 15, 0, 255, 255);
    pBlue = new Palette(0, 80, 15, 0, 0, 255);
    pMagenta = new Palette(0, 96, 15, 255, 0, 255);
    pBrown = new Palette(0, 112, 15, 165, 42, 42);
    pWhite = new Palette(0, 128, 15, 255, 255, 255);
    pBlack = new Palette(0, 144, 15, 0, 0, 0);
}

//palette buttons corresponding actions
function mousePressed() {
    if (pRed.pressed()) {
        onPalette = 1;
        console.log('red');
        c = pRed.getColor();
    }
    else if (pOrange.pressed()) {
        onPalette = 1;
        console.log('orange');
        c = pOrange.getColor();
    }
    else if (pYellow.pressed()) {
        onPalette = 1;
        console.log('yellow');
        c = pYellow.getColor();
    }
    else if (pGreen.pressed()) {
        onPalette = 1;
        console.log('green');
        c = pGreen.getColor();
    }
    else if (pCyan.pressed()) {
        onPalette = 1;
        console.log('cyan');
        c = pCyan.getColor();
    }
    else if (pBlue.pressed()) {
        onPalette = 1;
        console.log('blue');
        c = pBlue.getColor();
    }
    else if (pMagenta.pressed()) {
        onPalette = 1;
        console.log('magenta');
        c = pMagenta.getColor();
    }
    else if (pBrown.pressed()) {
        onPalette = 1;
        console.log('brown');
        c = pBrown.getColor();
    }
    else if (pWhite.pressed()) {
        onPalette = 1;
        console.log('white');
        c = pWhite.getColor();
    }
    else if (pBlack.pressed()) {
        onPalette = 1;
        console.log('black');
        c = pBlack.getColor();
    }else {
        let insideX = mouseX >= 0 && mouseX <= 16;
        let insideY = mouseY >= 0 && mouseY <= 100;
            
        let x = mouseX;
        let y = mouseY;
        if (onPalette && !(insideX && insideY)) {
            push();
            stroke(c);
            strokeWeight(15);
            line(x, y, x, y);
            pop();
        }else console.log('no palette');
    }
    
    
}

//painting using lines, avoids painting over palette
function mouseDragged() {
    let insideX = mouseX >= 0 && mouseX <= 16;
    let insideY = mouseY >= 0 && mouseY <= 100;
        
    let x = mouseX;
    let y = mouseY;
    if (onPalette && !(insideX && insideY)) {
        push();
        stroke(c);
        strokeWeight(10);
        line(x, y, x+1, y+1);
        pop();
    }else console.log('no palette');
}

//Palette class; makes palette color button
class Palette {
    constructor(x, y, pSize, c1, c2, c3) {
        this.x = x;
        this.y = y;
        this.pSize = pSize;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        fill(c1, c2, c3);
        square(x, y, pSize);
    }

    pressed() {
        let insideX = mouseX >= this.x && mouseX <= this.x+this.pSize;
        let insideY = mouseY >= this.y && mouseY <= this.y+this.pSize;
        if (insideX && insideY) {
            return onPalette = 1;
        }
    }

    getColor() {
        return color(this.c1, this.c2, this.c3);
    }
}