import GameCanvasStructure from "@/interfaces/GameCanvasStructure";
import { Context2D } from "@/types";

export default class Canvas implements GameCanvasStructure {
  element: HTMLCanvasElement = document.createElement("canvas");
  ctx: Context2D = this.element.getContext("2d");

  constructor() {
    console.log("working");
  }
}
