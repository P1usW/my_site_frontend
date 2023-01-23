const config = {
    waveSpeed: 0.5,
    waveToBlend: 4,
    curvesNum: 40,
}

class waveNoise {
    constructor() {
        this.waveSet = [];
    }

    addWaves(requiredWaves) {
        for (let i = 0; i < requiredWaves; i++) {
            let randomAngle = Math.random() * 360;
            this.waveSet.push(randomAngle);
        }
    }

    getWave() {
        let blendedWave = 0;
        for (let e of this.waveSet) {
            blendedWave += Math.sin(e / 180 * Math.PI);
        }
        return (blendedWave / this.waveSet.length + 1) / 2;
    }

    update() {
        this.waveSet.forEach((e, i) => {
            let r = Math.random() * (i+1) * config.waveSpeed;
            this.waveSet[i] = (e + r) % 360;
        })
    }
}

class Animate {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = {w: 0, h: 0, cx: 0, cy: 0};
        this.cps = [];
        this.cpNums = 3;
        this.setCanvasSize = this.setCanvasSize.bind(this);
    }

    setCanvasSize() {
        this.size.w = this.canvas.width = window.innerWidth;
        this.size.h = this.canvas.height = window.innerHeight;
        this.size.cx = this.size.w / 2;
        this.size.cy = this.size.h / 2;
    }

    init() {
        this.setCanvasSize();
        this.mount();
        this.createCp();
        this.loop();
    }

    mount() {
        window.addEventListener('resize', this.setCanvasSize)
    }

    unmount() {
        window.removeEventListener('resize', this.setCanvasSize)
    }

    createCp() {
        for (let i = 0; i < this.cpNums + config.curvesNum; i++) {
            let cp = new waveNoise();
            cp.addWaves(config.waveToBlend);
            this.cps.push(cp);
        }
    }

    updateCurves() {
        let c = this.cps;
        let _cpX1 = c[0].getWave() * this.size.w;
        let _cpY1 = c[1].getWave() * this.size.h;
        let _cpX2 = c[2].getWave() * this.size.w;

        for (let i = 0; i < config.curvesNum; i++) {
            let _cpY2 = c[3 + i].getWave();
            let curveParam = {
                startX: 0,
                startY: this.size.h / config.curvesNum * i,
                cpX1: _cpX1,
                cpY1: _cpY1,
                cpX2: _cpX2,
                cpY2: _cpY2 * this.size.h,
                endX: this.size.w,
                endY: this.size.h / config.curvesNum * i,
                alpha: _cpY2
            }
            this.drawCurve(curveParam);
        }

    }

    drawCurve({startX, startY, cpX1, cpY1, cpX2, cpY2, endX, endY, alpha}) {
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha}`;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, endX, endY);
        this.ctx.stroke();
    }

    updateCp() {
        this.cps.forEach(e => e.update());
    }

    updateCanvas() {
        this.ctx.fillStyle = 'rgba(29, 29, 29, 1)';
        this.ctx.fillRect(0, 0, this.size.w, this.size.h);
    }

    loop() {
        this.updateCanvas();
        this.updateCurves();
        this.updateCp();
        requestAnimationFrame(() => this.loop());
    }

}

export default Animate

