import GameCanvasStructure from "@/interfaces/GameCanvasStructure";
import GameCanvasOptions from "@/interfaces/GameCanvasOptions";

import { Context2D } from "@/types";

export default class Canvas implements GameCanvasStructure {
  element: HTMLCanvasElement = document.createElement("canvas");
  ctx: Context2D = this.element.getContext("2d");

  constructor(options: GameCanvasOptions) {
    if (options.append) document.body.appendChild(this.element);
    if (options.fullscreen) {
      this.element.width = innerWidth;
      this.element.height = innerHeight;
    }
  }
}
