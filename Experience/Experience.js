import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
import Renderer from "./Renderer.js";

import World from "./World/World.js";

export default class Experience{
    //Instantiate my room three js experience
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();

        //Resize the experience when the window has been resized
        this.sizes.on("resize", () => {
            this.resize();
        });

        //Update the experience when the window has been updated
        this.time.on("update", () => {
            this.update();
        });
    }

    //Resize the experience
    resize() {
        this.camera.resize();
        this.world.update();
        this.renderer.resize();
    }

    //Update the experience
    update() {
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }

}