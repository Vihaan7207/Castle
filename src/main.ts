import './style.css';
import * as BABYLON from 'babylonjs';
import { createScene } from './createScene.js';

const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#main')!;

const engine: BABYLON.Engine = new BABYLON.Engine(canvas, true);

const scene: BABYLON.Scene = createScene(engine, canvas);

engine.runRenderLoop((): void => {
  scene.render();
});

window.addEventListener('resize', (): void => {
  engine.resize();
})