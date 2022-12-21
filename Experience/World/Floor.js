import * as THREE from "three";
import { Mesh } from "three";

import Experience from "../Experience.js";

import GSAP from "gsap";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
    
        this.setFloor();
    }

    //Set the color and rotation of the floor of which my room sits on
    setFloor() {
        this.geometry = new THREE.PlaneGeometry(100, 100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0x437FC7,
            side: THREE.Backside
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = -Math.PI / 2;
        this.plane.position.y = -0.3;
        this.plane.receiveShadow = true;
    }

    resize() {
        
    }

    update() {
        
    }

}