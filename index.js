// Made by Awli

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const gravity = 1.2;

class Sprite {
    constructor({ x, y, w, h, img }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = new Image();
        this.image.src = img;
    }

    render() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}

class Player extends Sprite {
    constructor({ x, y, w, h, img, velX, velY }) {
        super({ x, y, w, h, img });

        this.velX = velX;
        this.velY = velY;

        this.keyW = false;
        this.keyA = false;
        this.keyD = false;
    }

    update() {
        this.x += this.velX;
        this.y += this.velY
        if (!this.isColliding(null))
            this.y += gravity;

        if (this.keyW)
            this.velY -= gravity;
    }

    isColliding(withWhat) {
        return false;
        return Boolean(1);
    }
}

class Obstacle extends Sprite {
    constructor({ x, y, w, h, img}) {
        super({ x, y, w, h, img });
    }
}

// OBJECTS
const background = new Sprite({ x: 0, y: 0, w: 1280, h: 720, img: 'Gradient.png' });
const player = new Player({ x: 30, y: 400, w: 32, h: 64, img: 'Player.png', velX: 0, velY: 0 });

let objects = [];

// KEY LISTENERS

window.addEventListener('keydown', (evt) => {
    switch (evt.key) {
        case 'w':
            player.keyW = true;
            break;
        case 'a':
            player.keyA = true;
            break;
        case 'd':
            player.keyD = true;
            break;
    }
});

window.addEventListener('keyup', (evt) => {
    switch (evt.key) {
        case 'w':
            player.keyW = false;
            break;
        case 'a':
            player.keyA = false;
            break;
        case 'd':
            player.keyD = false;
            break;
    }
});

// MAIN LOOP
canvas.width = 1280;
canvas.height = 720;

function animate() {
    window.requestAnimationFrame(animate);

    background.render();
    player.render(); player.update();

    for (let o of objects) {
        o.render();
    }
    // STUFF
}
animate();