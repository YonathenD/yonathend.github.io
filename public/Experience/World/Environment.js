import * as THREE from "three";

import Experience from "../Experience.js"

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        
        this.setSunlight();
    }

    //Set the lighting of the environment
    setSunlight() {
        
        //Directional lighting
        this.sunLight = new THREE.DirectionalLight("#35213b", 8.78);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(-2, 7, 10);
        this.scene.add(this.sunLight);

        //Ambient lighting
        this.ambientLight = new THREE.AmbientLight("#9779bd", 0.5);
        this.scene.add(this.ambientLight);
    }

    resize() {
        
    }

    update() {
        
    }

}