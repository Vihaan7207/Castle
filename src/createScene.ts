import * as BABYLON from 'babylonjs';

export const createScene = (engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene => {
    const scene: BABYLON.Scene = new BABYLON.Scene(engine);
  
    const camera: BABYLON.UniversalCamera = new BABYLON.UniversalCamera(
        'camera',
        new BABYLON.Vector3(0, 5, -10),
        scene
    );

    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light: BABYLON.HemisphericLight = new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    light.intensity = 0.7;

    const sphere: BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere(
        'sphere1',
        { diameter: 2, segments: 32 },
        scene
    );

    sphere.position.y = 1;

    const ground = BABYLON.MeshBuilder.CreateGround(
        'ground',
        { width: 6, height: 6 },
        scene
    );

    return scene;
  };
