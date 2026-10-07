import { Component, createRef, type PointerEvent } from "react";

const easeMs = 360;

const travel = {

  archX: 18,
  archY: 10,

  notchX: 42,
  notchY: 26,

  peakX: 70,
  peakY: 42,

};

function blend(delta: number) {

  return 1 - Math.exp(-delta / easeMs);

}

function close(current: number, goal: number) {

  return Math.abs(current - goal) < 0.05;

}

export class App extends Component {

  arch = createRef<SVGSVGElement>();

  left = createRef<SVGSVGElement>();
  right = createRef<SVGSVGElement>();

  peak = createRef<SVGSVGElement>();

  targetX = 0;
  targetY = 0;

  archX = 0;
  archY = 0;

  leftX = 0;
  leftY = 0;

  rightX = 0;
  rightY = 0;

  peakX = 0;
  peakY = 0;

  frame = 0;

  last = 0;

  componentWillUnmount() {

    cancelAnimationFrame(this.frame);

  }

  onPointerMove = (event: PointerEvent<HTMLElement>) => {

    if (event.pointerType !== "mouse") {

      return;

    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

      return;

    }

    const bounds = event.currentTarget.getBoundingClientRect();

    this.targetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    this.targetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    this.follow();

  };

  onPointerLeave = () => {

    this.targetX = 0;
    this.targetY = 0;

    this.follow();

  };

  follow = () => {

    if (this.frame) {

      return;

    }

    this.last = 0;
    this.frame = requestAnimationFrame(this.step);

  };

  step = (now: number) => {

    const delta = this.last === 0 ? 16 : Math.min(now - this.last, 48);

    this.last = now;

    const amount = blend(delta);

    const archGoalX = this.targetX * travel.archX;
    const archGoalY = this.targetY * travel.archY;

    const notchGoalX = this.targetX * travel.notchX;
    const notchGoalY = this.targetY * travel.notchY;

    const peakGoalX = this.targetX * travel.peakX;
    const peakGoalY = this.targetY * travel.peakY;

    this.archX += (archGoalX - this.archX) * amount;
    this.archY += (archGoalY - this.archY) * amount;

    this.leftX += (notchGoalX - this.leftX) * amount;
    this.leftY += (notchGoalY - this.leftY) * amount;

    this.rightX += (notchGoalX - this.rightX) * amount;
    this.rightY += (notchGoalY - this.rightY) * amount;

    this.peakX += (peakGoalX - this.peakX) * amount;
    this.peakY += (peakGoalY - this.peakY) * amount;

    const resting = close(this.archX, archGoalX)
      && close(this.archY, archGoalY)
      && close(this.leftX, notchGoalX)
      && close(this.leftY, notchGoalY)
      && close(this.rightX, notchGoalX)
      && close(this.rightY, notchGoalY)
      && close(this.peakX, peakGoalX)
      && close(this.peakY, peakGoalY);

    if (resting) {

      this.archX = archGoalX;
      this.archY = archGoalY;

      this.leftX = notchGoalX;
      this.leftY = notchGoalY;

      this.rightX = notchGoalX;
      this.rightY = notchGoalY;

      this.peakX = peakGoalX;
      this.peakY = peakGoalY;

    }

    this.place(this.arch.current, this.archX, this.archY);
    this.place(this.left.current, this.leftX, this.leftY);
    this.place(this.right.current, this.rightX, this.rightY);
    this.place(this.peak.current, this.peakX, this.peakY);

    if (resting) {

      this.frame = 0;
      return;

    }

    this.frame = requestAnimationFrame(this.step);

  };

  place(node: SVGSVGElement | null, x: number, y: number) {

    if (!node) { return; }

    node.style.transform = `translate(${x}px, ${y}px)`;

  }

  render() {

    return (

      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#1c1c1c] px-6 text-[#f4efe4]" onPointerMove={this.onPointerMove} onPointerLeave={this.onPointerLeave}>

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 aspect-square w-[118vmin] -translate-x-1/2 -translate-y-1/2">

            <svg ref={this.arch} viewBox="0 0 1080 1080" aria-hidden="true" className="absolute inset-0 h-full w-full">

              <circle cx="537.6" cy="585.3" r="457.1" fill="#484846" />

            </svg>

            <svg ref={this.left} viewBox="0 0 1080 1080" aria-hidden="true" className="absolute inset-0 h-full w-full">

              <polygon points="310,303 -207.88,1200 827.88,1200" fill="#1c1c1c" />

            </svg>

            <svg ref={this.right} viewBox="0 0 1080 1080" aria-hidden="true" className="absolute inset-0 h-full w-full">

              <polygon points="765,303 247.12,1200 1282.88,1200" fill="#1c1c1c" />

            </svg>

            <svg ref={this.peak} viewBox="0 0 1080 1080" aria-hidden="true" className="absolute inset-0 h-full w-full">

              <polygon points="539.5,453 108.21,1200 970.79,1200" fill="#262525" />

            </svg>

          </div>

        </div>

        <div className="relative text-center">

          <h1 className="font-serif text-6xl font-medium tracking-tight sm:text-7xl">Windward</h1>

          <p className="mt-3 font-serif text-lg">Coming Soon</p>

        </div>

      </main>

    );

  }

}
