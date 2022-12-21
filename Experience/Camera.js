import * as THREE from "three";

import Experience from "./Experience.js"

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"

export default class Camera{
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }

    //Create the perspective camera
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.x = 0;
        this.perspectiveCamera.position.y = 10;
        this.perspectiveCamera.position.z = 29;
    }

    //Create the orthographic camera
    createOrthographicCamera() {
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -50,
            50
        );
        this.orthographicCamera.position.y = 5;
        this.orthographicCamera.position.z = 6;
        this.orthographicCamera.rotation.x = -Math.PI /6;

        this.scene.add(this.orthographicCamera);

        const size = 20;
        const divisions = 20;
    }

    //Limit the ability to view the back of my room
    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
    }

    resize() {
        //Updating perspective camera on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating orthographic camera on resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;

        this.orthographicCamera.updateProjectionMatrix();
    }

    //Update the controls and the projection of the camera view
    update() {
        this.orthographicCamera.zoom = 0.8;
        this.orthographicCamera.updateProjectionMatrix();
        this.controls.update();
    }

}