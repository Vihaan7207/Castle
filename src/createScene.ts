import * as BABYLON from 'babylonjs';
import { sleep } from './assets';

const jump = (camera: BABYLON.UniversalCamera): void => {
    for( let i: number = 0; i < 20; i++ ) {
        sleep(2000).then()
    }
}

export const createScene = (engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene => {
    //* Create scene
    const scene: BABYLON.Scene = new BABYLON.Scene(engine);

    //* Set up gravity
    const assumedFramesPerSecond: number = 60;
    const earthGravity: number = -9.81;
    scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);
    scene.collisionsEnabled = true;
  
    //* Create camera
    const camera: BABYLON.UniversalCamera = new BABYLON.UniversalCamera(
        'camera',
        new BABYLON.Vector3(0, 5, -10),
        scene
    );
    
    //* Camera settings
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 3, 1);
    camera.checkCollisions = true;

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            jump(camera);
        }
    });

    //* Create light
    const light: BABYLON.HemisphericLight = new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
    );
    
    //* Light settings
    light.intensity = 0.7;

    const sphere: BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere(
        'sphere1',
        { diameter: 2, segments: 32 },
        scene
    );

    sphere.position.y = 1;

    //* Create ground
    const ground = BABYLON.MeshBuilder.CreateGround(
        'ground',
        { width: 10, height: 25 },
        scene
    );

    ground.checkCollisions = true;

    return scene;
  };
